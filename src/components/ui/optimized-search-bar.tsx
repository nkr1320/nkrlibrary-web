import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import { useDebouncedSearch } from "@/hooks/use-debounced-search";
import { useMotionPreferences } from "@/hooks/use-motion-preferences";

interface OptimizedSearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const OptimizedSearchBar = React.memo<OptimizedSearchBarProps>(
  ({ onSearch, placeholder = "Search videos...", className = "" }) => {
    const { prefersReducedMotion } = useMotionPreferences();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const {
      query,
      setQuery,
      isSearching,
      getSuggestions,
      recentSearches,
      addToRecentSearches,
      clearRecentSearches,
    } = useDebouncedSearch();

    const suggestions = getSuggestions(inputValue);

    // Handle input change with debouncing
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setQuery(value);
        onSearch?.(value);
      },
      [setQuery, onSearch],
    );

    // Handle suggestion click
    const handleSuggestionClick = useCallback(
      (suggestion: string) => {
        setInputValue(suggestion);
        setQuery(suggestion);
        addToRecentSearches(suggestion);
        onSearch?.(suggestion);
        setIsOpen(false);
        inputRef.current?.blur();
      },
      [setQuery, addToRecentSearches, onSearch],
    );

    // Handle clear
    const handleClear = useCallback(() => {
      setInputValue("");
      setQuery("");
      onSearch?.("");
      inputRef.current?.focus();
    }, [setQuery, onSearch]);

    // Handle focus/blur
    const handleFocus = useCallback(() => {
      setIsOpen(true);
    }, []);

    const handleBlur = useCallback(() => {
      // Delay closing to allow suggestion clicks
      setTimeout(() => setIsOpen(false), 150);
    }, []);

    // Handle key navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }, []);

    const searchBarVariants = {
      focused: {
        scale: prefersReducedMotion ? 1 : 1.02,
        boxShadow: prefersReducedMotion
          ? "0 0 0 2px hsl(var(--primary) / 0.2)"
          : "0 0 0 2px hsl(var(--primary) / 0.2), 0 8px 24px hsl(var(--foreground) / 0.12)",
      },
      unfocused: {
        scale: 1,
        boxShadow: "0 0 0 1px hsl(var(--border))",
      },
    };

    const suggestionVariants = {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: prefersReducedMotion ? 0.1 : 0.2 },
      },
      exit: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : -10,
        transition: { duration: 0.1 },
      },
    };

    return (
      <div className={`relative ${className}`}>
        {/* Search Input */}
        <motion.div
          variants={searchBarVariants}
          animate={isOpen ? "focused" : "unfocused"}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
            />
            {inputValue && (
              <button
                onClick={handleClear}
                className="absolute right-3 p-1 hover:bg-accent rounded-full transition-colors"
                aria-label="Clear search"
              >
                <X className="h-3 w-3" />
              </button>
            )}
            {isSearching && (
              <div className="absolute right-3 w-4 h-4">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Suggestions Dropdown */}
        <AnimatePresence>
          {isOpen && (suggestions.length > 0 || recentSearches.length > 0) && (
            <motion.div
              variants={suggestionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
            >
              {/* Recent Searches */}
              {recentSearches.length > 0 && !inputValue && (
                <div className="p-3 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Recent
                    </span>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="block w-full text-left px-2 py-1 text-sm hover:bg-accent rounded transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className="p-3">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-1 mb-2">
                    <TrendingUp className="h-3 w-3" />
                    Suggestions
                  </span>
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left px-2 py-1 text-sm hover:bg-accent rounded transition-colors truncate"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

OptimizedSearchBar.displayName = "OptimizedSearchBar";

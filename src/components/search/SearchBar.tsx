import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/hooks/use-search";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearchFocus?: (focused: boolean) => void;
  variant?: "header" | "page";
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = "",
  placeholder = "Search videos...",
  onSearchFocus,
  variant = "header",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const {
    query,
    setQuery,
    searchVideos,
    getSuggestions,
    recentSearches,
    addToRecentSearches,
    clearRecentSearches,
  } = useSearch();

  const suggestions = getSuggestions(query);
  const hasRecentSearches = recentSearches.length > 0;

  // Handle search submission
  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    addToRecentSearches(searchTerm);
    setQuery(searchTerm);
    setShowSuggestions(false);
    setIsFocused(false);

    // Navigate to videos page with search parameter
    navigate(`/videos?search=${encodeURIComponent(searchTerm)}`);

    // Blur input on mobile
    if (isMobile && inputRef.current) {
      inputRef.current.blur();
    }
  };

  // Handle input focus
  const handleFocus = () => {
    setIsFocused(true);
    setShowSuggestions(true);
    onSearchFocus?.(true);
  };

  // Handle input blur with delay to allow clicks
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setShowSuggestions(false);
      onSearchFocus?.(false);
    }, 150);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(query);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.15 },
    },
  };

  const suggestionVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyPress}
          className={cn(
            "pl-10 pr-10 transition-all duration-200",
            variant === "header"
              ? "bg-background/50 backdrop-blur-sm border-border/50 focus:bg-background focus:border-primary/50"
              : "bg-background border-border",
            isFocused && "ring-2 ring-primary/20",
            className,
          )}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Search Suggestions Overlay */}
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            variants={searchVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-2xl z-50 max-h-80 overflow-y-auto"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Recent Searches */}
            {!query && hasRecentSearches && (
              <div className="p-3 border-b border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    Recent Searches
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearRecentSearches}
                    className="text-xs h-6 px-2"
                  >
                    Clear
                  </Button>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <motion.button
                      key={search}
                      variants={suggestionVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSuggestionClick(search)}
                      className="w-full text-left px-2 py-1.5 rounded text-sm hover:bg-accent/50 transition-colors flex items-center gap-2"
                    >
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular/Trending Searches */}
            {!query && (
              <div className="p-3 border-b border-border">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                  <TrendingUp className="h-3 w-3" />
                  Popular Searches
                </div>
                <div className="space-y-1">
                  {suggestions.slice(0, 5).map((search, index) => (
                    <motion.button
                      key={search}
                      variants={suggestionVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSuggestionClick(search)}
                      className="w-full text-left px-2 py-1.5 rounded text-sm hover:bg-accent/50 transition-colors flex items-center gap-2"
                    >
                      <TrendingUp className="h-3 w-3 text-muted-foreground" />
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Suggestions */}
            {query && suggestions.length > 0 && (
              <div className="p-3">
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      variants={suggestionVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-2 py-1.5 rounded text-sm hover:bg-accent/50 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <Search className="h-3 w-3 text-muted-foreground" />
                        <span>{suggestion}</span>
                      </div>
                      <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Search Results Preview */}
            {query && (
              <div className="p-3 border-t border-border">
                <Button
                  onClick={() => handleSearch(query)}
                  variant="outline"
                  size="sm"
                  className="w-full justify-between"
                >
                  <span>Search for "{query}"</span>
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            )}

            {/* No Results */}
            {query && suggestions.length === 0 && (
              <div className="p-6 text-center text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No suggestions found</p>
                <p className="text-xs mt-1">Try a different search term</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

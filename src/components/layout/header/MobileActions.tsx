import React from "react";
import { motion } from "framer-motion";
import { Menu as MenuIcon, Bot } from "lucide-react";
import { SearchBar } from "@/components/search/SearchBar";
import { useSentrum } from "@/contexts/SentrumContext";

interface MobileActionsProps {
  onMenuOpen: () => void;
}

const MobileActions: React.FC<MobileActionsProps> = ({ onMenuOpen }) => {
  const { state, openSentrum } = useSentrum();

  return (
    <div className="flex items-center gap-2 flex-1 ml-4">
      {/* Mobile Search Bar */}
      <div className="flex-1 max-w-xs">
        <SearchBar
          className="w-full"
          placeholder="Search..."
          variant="header"
        />
      </div>

      {/* SENTRUM Icon */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={() => openSentrum("chat")}
          className={`relative ${
            state.isOpen ? "text-primary" : "text-muted-foreground"
          }`}
          title="Open SENTRUM AI"
          aria-label="Open SENTRUM AI Assistant" // Accessibility label for screen readers
        >
          <Bot className="h-5 w-5" />
          {state.messages.length > 0 && !state.isOpen && (
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full" />
          )}
        </button>
      </motion.div>

      {/* Hamburger Menu */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={onMenuOpen}
          className="text-primary"
          aria-label="Open navigation menu" // Accessibility label for screen readers
        >
          <MenuIcon />
        </button>
      </motion.div>
    </div>
  );
};

export default MobileActions;

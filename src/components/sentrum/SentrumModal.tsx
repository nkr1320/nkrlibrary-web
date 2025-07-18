import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, FileText, BookOpen } from "lucide-react";
import { useSentrum } from "@/contexts/SentrumContext";
import { Button } from "@/components/ui/button";
import { useIsMobile, useDeviceType } from "@/hooks/use-mobile";
import SentrumChat from "./SentrumChat";
import SentrumResumeWrapper from "./SentrumResumeWrapper";
import SentrumNotebook from "./SentrumNotebook";

const SentrumModal: React.FC = () => {
  const { state, closeSentrum, setCurrentView } = useSentrum();
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();

  const views = [
    { id: "chat", label: "Chat", icon: MessageCircle },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "notebook", label: "Notebook", icon: BookOpen },
  ];

  const renderCurrentView = () => {
    switch (state.currentView) {
      case "chat":
        return <SentrumChat />;
      case "resume":
        return <SentrumResumeWrapper />;
      case "notebook":
        return <SentrumNotebook />;
      default:
        return <SentrumChat />;
    }
  };

  const getModalClasses = () => {
    const baseClasses =
      "fixed z-50 bg-background border border-border shadow-2xl flex flex-col rounded-xl";

    switch (deviceType) {
      case "mobile":
        return `${baseClasses} inset-x-2 top-4 bottom-4 max-h-[95vh]`;
      case "tablet":
        return `${baseClasses} top-4 right-4 bottom-4 w-80 sm:w-96`;
      case "desktop":
        return `${baseClasses} top-4 right-4 bottom-4 w-96 lg:w-[28rem]`;
      case "large-desktop":
        return `${baseClasses} top-4 right-4 bottom-4 w-[28rem] xl:w-[32rem]`;
      default:
        return `${baseClasses} top-4 right-4 bottom-4 w-96`;
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: deviceType === "mobile" ? 0.95 : 0.9,
      y: deviceType === "mobile" ? 20 : 0,
      x: deviceType === "mobile" ? 0 : 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
    },
    exit: {
      opacity: 0,
      scale: deviceType === "mobile" ? 0.95 : 0.9,
      y: deviceType === "mobile" ? 20 : 0,
      x: deviceType === "mobile" ? 0 : 50,
    },
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSentrum}
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ${
              isMobile ? "" : "md:bg-transparent md:backdrop-blur-none"
            }`}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={getModalClasses()}
          >
            {/* Header with tabs */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
              <div className="flex items-center gap-1">
                {views.map((view) => (
                  <Button
                    key={view.id}
                    variant={
                      state.currentView === view.id ? "default" : "ghost"
                    }
                    size={deviceType === "mobile" ? "sm" : "sm"}
                    onClick={() =>
                      setCurrentView(view.id as "chat" | "resume" | "notebook")
                    }
                    className={`flex items-center gap-2 ${
                      deviceType === "mobile" ? "px-2 py-1.5" : "px-3 py-2"
                    }`}
                  >
                    <view.icon
                      className={`${deviceType === "mobile" ? "h-3.5 w-3.5" : "h-4 w-4"}`}
                    />
                    <span
                      className={`${deviceType === "mobile" ? "text-xs" : "text-sm"} hidden sm:inline`}
                    >
                      {view.label}
                    </span>
                  </Button>
                ))}
              </div>

              {/* Close button with aria-label for accessibility */}
              <Button
                onClick={closeSentrum}
                variant="ghost"
                size="sm"
                aria-label="Close SENTRUM modal"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden min-h-0">
              {renderCurrentView()}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SentrumModal;

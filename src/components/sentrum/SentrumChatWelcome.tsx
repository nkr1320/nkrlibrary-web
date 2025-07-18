import React from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDeviceType } from "@/hooks/use-mobile";

interface SentrumChatWelcomeProps {
  quickActions: string[];
  onQuickAction: (action: string) => void;
}

const SentrumChatWelcome: React.FC<SentrumChatWelcomeProps> = ({
  quickActions,
  onQuickAction,
}) => {
  const deviceType = useDeviceType();

  const getResponsiveClasses = () => {
    switch (deviceType) {
      case "mobile":
        return {
          container: "text-center py-6 px-4",
          iconSize: "h-12 w-12",
          titleSize: "text-base",
          textSize: "text-sm",
          buttonSize: "text-xs",
          maxWidth: "max-w-xs",
          marginBottom: "mb-4",
        };
      case "tablet":
        return {
          container: "text-center py-7 px-4",
          iconSize: "h-14 w-14",
          titleSize: "text-lg",
          textSize: "text-sm",
          buttonSize: "text-sm",
          maxWidth: "max-w-sm",
          marginBottom: "mb-5",
        };
      default:
        return {
          container: "text-center py-8",
          iconSize: "h-16 w-16",
          titleSize: "text-lg",
          textSize: "text-base",
          buttonSize: "text-sm",
          maxWidth: "max-w-sm",
          marginBottom: "mb-6",
        };
    }
  };

  const classes = getResponsiveClasses();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={classes.container}
    >
      <Bot className={`${classes.iconSize} text-primary mx-auto mb-4`} />
      <h4 className={`${classes.titleSize} font-semibold text-foreground mb-2`}>
        Welcome to SENTRUM! 👋
      </h4>
      <p
        className={`text-muted-foreground ${classes.marginBottom} ${classes.maxWidth} mx-auto ${classes.textSize}`}
      >
        I'm your AI assistant ready to help you navigate NKR Library, find
        content, and track your learning journey.
      </p>
      <div className={`grid grid-cols-2 gap-2 ${classes.maxWidth} mx-auto`}>
        {quickActions.map((action) => (
          <Button
            key={action}
            onClick={() => onQuickAction(action)}
            variant="outline"
            size={deviceType === "mobile" ? "sm" : "sm"}
            className={`${classes.buttonSize} ${deviceType === "mobile" ? "px-2 py-1.5" : ""}`}
          >
            {action}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default SentrumChatWelcome;

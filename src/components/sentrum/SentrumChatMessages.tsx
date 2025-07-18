import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type ChatMessage } from "@/contexts/SentrumContext";
import { useDeviceType } from "@/hooks/use-mobile";
import VideoSuggestionCard from "./VideoSuggestionCard";

interface SentrumChatMessagesProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

const SentrumChatMessages: React.FC<SentrumChatMessagesProps> = ({
  messages,
  isTyping,
}) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getResponsiveClasses = () => {
    switch (deviceType) {
      case "mobile":
        return {
          container: "space-y-3 p-3",
          maxWidth: "max-w-[85%]",
          avatarSize: "h-7 w-7",
          iconSize: "h-3.5 w-3.5",
          padding: "p-2.5",
          textSize: "text-sm",
          timestampSize: "text-xs",
          gap: "gap-2",
        };
      case "tablet":
        return {
          container: "space-y-3 p-4",
          maxWidth: "max-w-[80%]",
          avatarSize: "h-8 w-8",
          iconSize: "h-4 w-4",
          padding: "p-3",
          textSize: "text-sm",
          timestampSize: "text-xs",
          gap: "gap-2",
        };
      default:
        return {
          container: "space-y-4 p-4",
          maxWidth: "max-w-[75%]",
          avatarSize: "h-8 w-8",
          iconSize: "h-4 w-4",
          padding: "p-3",
          textSize: "text-sm",
          timestampSize: "text-xs",
          gap: "gap-3",
        };
    }
  };

  const classes = getResponsiveClasses();

  return (
    <ScrollArea className="flex-1 h-0 min-h-0" ref={scrollAreaRef}>
      <div className={classes.container}>
        <AnimatePresence>
          {/* Each message uses message.id as a unique, stable key */}
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex ${classes.gap} ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.type === "ai" && (
                <div
                  className={`${classes.avatarSize} rounded-full bg-primary flex items-center justify-center flex-shrink-0`}
                >
                  <Bot className={`${classes.iconSize} text-white`} />
                </div>
              )}

              <div
                className={`flex flex-col ${classes.maxWidth} ${classes.gap}`}
              >
                <div
                  className={`${classes.padding} rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p
                    className={`whitespace-pre-wrap ${classes.textSize} leading-relaxed`}
                  >
                    {message.content}
                  </p>
                  <p className={`${classes.timestampSize} opacity-70 mt-1`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                {/* Video Suggestions for AI messages */}
                {message.type === "ai" &&
                  message.videoSuggestions &&
                  message.videoSuggestions.length > 0 && (
                    <div
                      className={`space-y-2 ${deviceType === "mobile" ? "space-y-1.5" : "space-y-2"}`}
                    >
                      <p
                        className={`${classes.timestampSize} text-muted-foreground font-medium px-1`}
                      >
                        📺 Related Videos:
                      </p>
                      {/* Each video uses video.id or fallback to title-index for uniqueness */}
                      {message.videoSuggestions.map((video, index) => (
                        <VideoSuggestionCard
                          key={video.id || `${video.title}-${index}`}
                          video={video}
                          index={index}
                          deviceType={deviceType}
                        />
                      ))}
                    </div>
                  )}
              </div>

              {message.type === "user" && (
                <div
                  className={`${classes.avatarSize} rounded-full bg-secondary flex items-center justify-center flex-shrink-0`}
                >
                  <User
                    className={`${classes.iconSize} text-secondary-foreground`}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${classes.gap}`}
          >
            <div
              className={`${classes.avatarSize} rounded-full bg-primary flex items-center justify-center`}
            >
              <Bot className={`${classes.iconSize} text-white`} />
            </div>
            <div className={`bg-muted ${classes.padding} rounded-lg`}>
              <div className="flex gap-1">
                <motion.div
                  className={`${deviceType === "mobile" ? "w-1.5 h-1.5" : "w-2 h-2"} bg-muted-foreground rounded-full`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className={`${deviceType === "mobile" ? "w-1.5 h-1.5" : "w-2 h-2"} bg-muted-foreground rounded-full`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className={`${deviceType === "mobile" ? "w-1.5 h-1.5" : "w-2 h-2"} bg-muted-foreground rounded-full`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default SentrumChatMessages;

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeviceType } from "@/hooks/use-mobile";

interface SentrumChatInputProps {
  onSendMessage: (message: string) => void;
  onQuickAction: (action: string) => void;
  isTyping: boolean;
  showQuickActions: boolean;
  quickActions: string[];
}

const SentrumChatInput: React.FC<SentrumChatInputProps> = ({
  onSendMessage,
  onQuickAction,
  isTyping,
  showQuickActions,
  quickActions,
}) => {
  const [inputValue, setInputValue] = useState("");
  const deviceType = useDeviceType();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const message = inputValue.trim();
    setInputValue("");
    onSendMessage(message);
  };

  const getPadding = () => {
    return deviceType === "mobile" ? "p-3" : "p-4";
  };

  const getInputSize = () => {
    return deviceType === "mobile" ? "text-sm" : "text-base";
  };

  const getIconSize = () => {
    return deviceType === "mobile" ? "h-3.5 w-3.5" : "h-4 w-4";
  };

  return (
    <div className={`${getPadding()} border-t border-border`}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything about NKR Library..."
          className={`flex-1 ${getInputSize()}`}
          disabled={isTyping}
        />
        <Button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          size={deviceType === "mobile" ? "sm" : "default"}
        >
          <Send className={getIconSize()} />
        </Button>
      </form>

      {showQuickActions && (
        <div
          className={`flex flex-wrap gap-2 ${deviceType === "mobile" ? "mt-2" : "mt-3"}`}
        >
          {quickActions.slice(0, 2).map((action) => (
            <Button
              key={action}
              onClick={() => onQuickAction(action)}
              variant="outline"
              size={deviceType === "mobile" ? "sm" : "sm"}
              className={
                deviceType === "mobile" ? "text-xs px-2 py-1" : "text-xs"
              }
            >
              {action}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SentrumChatInput;

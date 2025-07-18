import React from "react";
import { useSentrum } from "@/contexts/SentrumContext";
import SentrumChatHeader from "./SentrumChatHeader";
import SentrumChatMessages from "./SentrumChatMessages";
import SentrumChatInput from "./SentrumChatInput";
import SentrumChatWelcome from "./SentrumChatWelcome";

const SentrumChat: React.FC = () => {
  const { state, sendMessage, clearHistory, getSummary } = useSentrum();

  const handleSendMessage = async (message: string) => {
    await sendMessage(message);
  };

  const handleQuickAction = (action: string) => {
    sendMessage(action);
  };

  const handleDownload = () => {
    const summary = getSummary();
    navigator.clipboard.writeText(summary);
  };

  const quickActions = [
    "Help me navigate",
    "Find React tutorials",
    "Show my progress",
    "Explain cybersecurity",
  ];

  return (
    <div className="flex flex-col h-full bg-background">
      <SentrumChatHeader
        onDownload={handleDownload}
        onClearHistory={clearHistory}
      />

      {state.messages.length === 0 ? (
        <SentrumChatWelcome
          quickActions={quickActions}
          onQuickAction={handleQuickAction}
        />
      ) : (
        <SentrumChatMessages
          messages={state.messages}
          isTyping={state.isTyping}
        />
      )}

      <SentrumChatInput
        onSendMessage={handleSendMessage}
        onQuickAction={handleQuickAction}
        isTyping={state.isTyping}
        showQuickActions={state.messages.length === 0}
        quickActions={quickActions}
      />
    </div>
  );
};

export default SentrumChat;

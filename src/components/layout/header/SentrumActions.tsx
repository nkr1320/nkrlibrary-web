import React from "react";
import { motion } from "framer-motion";
import { Bot, Mic, MicOff } from "lucide-react";
import { useSentrum } from "@/contexts/SentrumContext";
import { useVoiceRecognition } from "@/hooks/use-voice-recognition";

const SentrumActions: React.FC = () => {
  const { state, openSentrum } = useSentrum();

  const { isListening, isSupported, startListening, stopListening } =
    useVoiceRecognition(() => openSentrum("chat"), "sentrum");

  return (
    <div className="flex items-center gap-2 mr-8">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => openSentrum("chat")}
          className={`relative transition-colors ${
            state.isOpen
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
          title="Open SENTRUM AI Assistant"
          aria-label="Open SENTRUM AI Assistant"
        >
          <Bot className="h-6 w-6" />
          {state.messages.length > 0 && !state.isOpen && (
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
          )}
        </button>
      </motion.div>

      {isSupported && (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={isListening ? stopListening : startListening}
            className={`transition-colors ${
              isListening
                ? "text-red-500 hover:text-red-400"
                : "text-muted-foreground hover:text-primary"
            }`}
            title={
              isListening
                ? 'Stop listening for "sentrum"'
                : "Start voice listening"
            }
            aria-label={
              isListening
                ? "Stop voice recognition for SENTRUM"
                : "Start voice recognition for SENTRUM"
            }
          >
            {isListening ? (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Mic className="h-5 w-5" />
              </motion.div>
            ) : (
              <MicOff className="h-5 w-5" />
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SentrumActions;

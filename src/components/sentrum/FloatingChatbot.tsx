import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "918309800253";

const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setMessage("");
    setOpen(false);
  };

  return (
    <div>
      {/* Floating Button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
      {/* Popup */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-xs bg-white dark:bg-gray-900 border border-border rounded-xl shadow-2xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-primary">Chat with us on WhatsApp</span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary"
              aria-label="Close chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <textarea
            className="w-full border rounded p-2 mb-3 text-sm resize-none focus:outline-none focus:ring focus:border-primary min-h-[60px]"
            placeholder="Type your message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={3}
            maxLength={500}
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-semibold transition-colors disabled:opacity-60"
          >
            <Send className="w-4 h-4" /> Send
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;

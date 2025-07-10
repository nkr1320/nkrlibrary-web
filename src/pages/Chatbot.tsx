import { useState, useRef, useEffect } from "react";
import { MetaTags } from "@/components/seo/MetaTags";
import { StructuredData } from "@/components/seo/structured-data";
import { useTranslation } from "react-i18next";

const initialMessages = [
  { sender: "bot", text: "Hi! I'm your library assistant. How can I help you today?" },
];

export default function Chatbot() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user", text: input },
      { sender: "bot", text: "(AI response placeholder)" },
    ]);
    setInput("");
  };

  return (
    <>
      <a href="#chatbot-main" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-100 text-blue-900 px-2 py-1 rounded z-50">{t('skipToChat')}</a>
      <MetaTags
        title="AI Chatbot | NKR Library"
        description="Chat with our AI-powered library assistant for instant help, resources, and tech support."
        url="https://nkrlibrary.com/chatbot"
        image="/og-image.png"
      />
      <StructuredData
        type="website"
        data={{
          name: "NKR Library Chatbot",
          description: "AI-powered chatbot for library help, resources, and support.",
          url: "https://nkrlibrary.com/chatbot"
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-gray-900 p-2 sm:p-4">
        <div
          id="chatbot-main"
          ref={chatAreaRef}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col h-[70vh] min-h-[350px] max-h-[90vh]"
          role="region"
          aria-label={t('chatbot')}
        >
          <div className="flex items-center justify-between px-2 sm:px-4 py-2 border-b dark:border-gray-700">
            <h2 className="text-base sm:text-lg font-semibold">{t('chatbot')}</h2>
            <span className="text-xs text-gray-400">{t('beta')}</span>
          </div>
          <div
            className="flex-1 overflow-y-auto px-2 sm:px-4 py-2 space-y-2"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-2 sm:px-3 py-2 rounded-lg max-w-[80%] text-xs sm:text-sm shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                  aria-label={msg.sender === "user" ? t('yourMessage') : t('botMessage')}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            className="flex items-center gap-1 sm:gap-2 p-2 border-t dark:border-gray-700"
            onSubmit={handleSend}
            aria-label={t('sendMessageToChatbot')}
          >
            <input
              className="flex-1 rounded border px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-100"
              type="text"
              placeholder={t('typeMessage')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label={t('messageInput')}
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded disabled:opacity-50 text-xs sm:text-sm"
              disabled={!input.trim()}
              aria-label={t('send')}
            >
              {t('send')}
            </button>
          </form>
        </div>
      </div>
    </>
  );
} 
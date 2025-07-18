import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import {
  XMarkIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Chatbot from "@/pages/Chatbot";

// Set to 'drawer' for a right-side drawer, 'modal' for centered modal
const CHATBOT_STYLE: "modal" | "drawer" = "drawer";

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-3 sm:p-4 flex items-center justify-center focus:outline-none focus:ring"
        aria-label="Open chatbot"
        onClick={() => setOpen(true)}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Modal or Drawer */}
      {CHATBOT_STYLE === "modal" ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md mx-auto">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                aria-label="Close chatbot"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="p-0">
                <Chatbot />
              </div>
            </div>
          </div>
        </Dialog>
      ) : null}
      {CHATBOT_STYLE === "drawer" && open ? (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close chatbot overlay"
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-xs sm:max-w-md bg-white dark:bg-gray-900 shadow-lg flex flex-col">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="Close chatbot"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="p-0 h-full overflow-y-auto">
              <Chatbot />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

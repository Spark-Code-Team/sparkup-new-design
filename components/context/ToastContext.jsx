// contexts/ToastContext.js
"use client";

import { createContext, useState, useContext, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

// کامپوننت بصری یک Toast تکی
function Toast({ message, type, onRemove }) {
  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
  };

  const colors = {
    success: "from-green-500 to-emerald-600",
    error: "from-red-500 to-rose-600",
    info: "from-sky-500 to-blue-600",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`relative flex items-center w-full max-w-xs p-4 my-2 text-white rounded-xl shadow-lg bg-gradient-to-br ${colors[type]}`}
    >
      <div className="text-xl">{icons[type]}</div>
      <div className="ms-3 text-sm font-medium">{message}</div>
      <button
        onClick={onRemove}
        className="ms-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg inline-flex items-center justify-center h-8 w-8 text-white/70 hover:text-white hover:bg-white/20 transition-all"
      >
        &times;
      </button>
    </motion.div>
  );
}

// کانتینر برای نمایش لیست Toastها
function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed top-4 sm:right-4 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 z-50 w-full max-w-xs sm:max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onRemove={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info", duration = 5000) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

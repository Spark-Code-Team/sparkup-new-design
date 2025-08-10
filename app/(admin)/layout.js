// app/(admin)/layout.jsx (نسخه Light Theme)
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "./components/Sidebar";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="font-azar flex h-screen bg-slate-100 md:mt-24 md:-mb-14 text-slate-800">
      <div className="hidden md:flex md:w-64">
        <Sidebar />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-24 right-6 z-30 p-2 bg-white text-slate-700 rounded-full shadow-lg border border-slate-200"
          aria-label="Open menu"
        >
          <FiMenu size={24} />
        </button>

        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* پس‌زمینه نیمه‌شفاف */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/50 z-40"
              />
              {/* سایدبار کشویی برای تم روشن */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                // سایدبار کشویی سفید با سایه برای ایجاد عمق
                className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-2xl"
              >
                <Sidebar />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-5 right-5 z-50 p-2 text-slate-500 hover:text-slate-800"
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* محتوای اصلی صفحه */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto ">
        {children}
      </main>
    </div>
  );
}

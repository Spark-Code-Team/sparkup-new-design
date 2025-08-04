"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-azar bg-red-50 text-center px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 1250 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 , duration:2}}
      >
        <span className="text-8xl md:text-9xl">⚙️</span>
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl font-bold text-red-700 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        ارور ۵۰۰ - یک چیزی درست کار نکرد!
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mt-4 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        نگران نباشید، تیم فنی ما باخبر شد و در حال بررسی مشکل است. لطفاً کمی بعد
        دوباره تلاش کنید.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.button
          onClick={() => reset()} // تابع reset برای تلاش مجدد برای رندر کردن صفحه
          className="px-8 py-3 rounded-lg font-bold text-center bg-red-600 text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          تلاش مجدد
        </motion.button>
        <Link href="/">
          <motion.div
            className="px-8 py-3 rounded-lg font-bold text-center bg-gray-200 text-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            برگشت به صفحه اصلی
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}

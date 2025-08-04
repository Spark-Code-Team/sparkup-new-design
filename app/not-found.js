"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedButton = ({ href, children, primary = false }) => (
  <Link href={href}>
    <motion.div
      className={`px-8 py-3 rounded-lg font-bold text-center ${
        primary ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  </Link>
);

export default function NotFound() {
  return (
    <div className="flex flex-col font-azar items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="text-9xl font-azar font-extrabold text-red-600 tracking-wider">
          404
        </span>
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        صفحه پیدا نشد
      </motion.h1>

      <motion.p
        className="text-lg text-gray-500 mt-4 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        ببخشید! این صفحه در دسترس نیست! 😅 بیا از صفحه اصلی شروع کن!
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <AnimatedButton href="/" primary>
          برگشت به صفحه اصلی
        </AnimatedButton>
        <AnimatedButton href="/services">بررسی خدمات</AnimatedButton>
      </motion.div>
    </div>
  );
}

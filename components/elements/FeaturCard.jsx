"use client";
import React from "react";
import { motion } from "framer-motion";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const FeatureCard = ({ icon, title, subtitle }) => {
  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="
        group relative w-full max-w-sm cursor-default overflow-hidden 
        rounded-2xl bg-orange-300 p-8 text-center shadow-lg
        dark:bg-orange-300
      "
    >
      <div
        className="
          pointer-events-none absolute -inset-px rounded-2xl opacity-0 
          transition-opacity duration-300 group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(300px at var(--mouse-x) var(--mouse-y), rgba(100, 11, 19,0.30), transparent 80%)",
        }}
      />

      <motion.div
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center 
                   rounded-full bg-blue-100 dark:bg-red-900/60"
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-4xl dark:text-red-900">{icon}</span>
      </motion.div>

      {/* عنوان */}
      <h3 className="mb-2 text-xl font-azar font-bold text-slate-900 dark:text-black">
        {digitsEnToFa(title)}
      </h3>

      {/* ساب تایتل */}
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {subtitle && digitsEnToFa(subtitle)}
      </p>
    </motion.div>
  );
};

export default FeatureCard;

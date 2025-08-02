// components/animations/PulsingBeacon.js
"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function PulsingBeacon({ className, colorClassName = "bg-red-500" }) {
  return (
    <div className={twMerge("relative w-6 h-6", className)}>
      {/* The expanding ripple circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={twMerge(
            "absolute inset-0 rounded-full opacity-50",
            colorClassName
          )}
          animate={{
            scale: [1, 3],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "mirror", // ✅ این خط مشکل را حل می‌کند
            delay: i * 0.5,
          }}
        />
      ))}

      {/* The central solid circle */}
      <div
        className={twMerge(
          "relative w-full h-full rounded-full",
          colorClassName
        )}
      />
    </div>
  );
}

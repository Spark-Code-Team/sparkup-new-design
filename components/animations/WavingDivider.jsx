// components/animations/WavingDivider.js
"use client";

import { motion } from "framer-motion";

export function WavingDivider({ color = "#ef4444" }) {
  const initialPath = "M0,50 Q125,0 250,50 T500,50";
  const finalPath = "M0,50 Q125,100 250,50 T500,50";

  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 500 100"
      preserveAspectRatio="none"
    >
      <motion.path
        fill="none"
        stroke={color}
        strokeWidth="4"
        animate={{
          d: [initialPath, finalPath, initialPath],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </svg>
  );
}

// components/LivelyInput.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { numberToEnglish, numberToPersian } from "../utils/EnNumberToFa";

const CustomInput = ({ label, id, className, type = "text", ...props }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // ... (کدهای variants بدون تغییر باقی می‌مانند) ...
  const containerVariants = {
    rest: {
      scale: 1,
      rotateX: 0,
      boxShadow:
        "0px 2px 4px rgba(0,0,0,0.1), inset 0px 1px 2px rgba(0,0,0,0.2)",
    },
    hover: {
      scale: 1.03,
      rotateX: -5,
      boxShadow:
        "0px 8px 16px rgba(0,0,0,0.2), inset 0px 1px 2px rgba(0,0,0,0.2)",
    },
    focus: {
      scale: 0.98,
      rotateX: 5,
      boxShadow:
        "0px 2px 8px rgba(239, 68, 68, 0.3), inset 0px 2px 4px rgba(0,0,0,0.3)",
    },
  };

  const labelVariants = {
    initial: {
      top: "50%",
      y: "-50%",
      scale: 1,
      color: "#000",
    },
    animate: {
      top: "8px",
      y: "0%",
      scale: id === "pages" || id === "about" ? 0.0 : 0.8,
      color: isFocused ? "#103b69" : "#00000",
    },
  };

  const isFloating = isFocused || value;

  const handleChange = (e) => {
    // مقدار ورودی کاربر را به انگلیسی تبدیل کرده و در state ذخیره می‌کنیم
    const englishValue = numberToEnglish(e.target.value);
    setValue(englishValue);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        // ... (props های motion.div بدون تغییر) ...
        variants={containerVariants}
        initial="rest"
        whileHover="hover"
        animate={isFocused ? "focus" : "rest"}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={twMerge(
          "relative inline-flex min-w-56 h-16 rounded-xl bg-gradient-to-br from-red-300 to-orange-300",
          className
        )}
      >
        <motion.label
          // ... (props های motion.label بدون تغییر) ...
          htmlFor={id}
          variants={labelVariants}
          initial="initial"
          animate={isFloating ? "animate" : "initial"}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute right-4 origin-right pointer-events-none"
        >
          {label}
        </motion.label>

        <input
          id={id}
          type={type}
          value={numberToPersian(value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          className="w-full h-full pt-5 px-4 bg-transparent text-black text-base outline-none text-right" // 👈 به text-right دقت کنید
          {...props}
        />
      </motion.div>
    </div>
  );
};

export default CustomInput;

// components/LivelyInput.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 1.

const numberToEnglish = (str) =>
  String(str).replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
const numberToPersian = (str) =>
  String(str).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const CustomInput = ({
  label,
  id,
  className,
  type = "text",
  value: controlledValue,
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

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
    initial: { top: "50%", y: "-50%", scale: 1, color: "#000" },
    animate: {
      top: "8px",
      y: "0%",
      scale: 0.8,
      color: isFocused ? "#103b69" : "#00000",
    },
  };

  const isFloating = isFocused || (value && value.length > 0);

  const handleChange = (e) => {
    const englishValue = numberToEnglish(e.target.value);

    if (!isControlled) {
      setInternalValue(englishValue);
    }
    if (onChange) {
      onChange(englishValue);
    }
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  const displayValue =
    type === "password" ? value || "" : numberToPersian(value || "");

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.div
        variants={containerVariants}
        initial="rest"
        whileHover="hover"
        animate={isFocused ? "focus" : "rest"}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={twMerge(
          "relative inline-flex w-full h-16 rounded-xl bg-white",
          className
        )}
      >
        <motion.label
          htmlFor={id}
          variants={labelVariants}
          initial="initial"
          animate={isFloating ? "animate" : "initial"}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute right-4 origin-right pointer-events-none"
        >
          {label}
        </motion.label>
        {type === "password" && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            // دکمه در سمت چپ و داخل padding فعلی قرار می‌گیرد
            className="absolute inset-y-0 left-4 flex items-center z-10 text-gray-600 hover:text-gray-900"
            aria-label="Toggle password visibility"
          >
            {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        )}

        <input
          id={id}
          type={inputType}
          value={numberToPersian(value || "")}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          className="w-full h-full pt-5 px-4 bg-transparent text-black text-sm md:text-base outline-none text-right"
          {...props}
        />
      </motion.div>
    </div>
  );
};

export default CustomInput;

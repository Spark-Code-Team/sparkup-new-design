"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// توابع تبدیل اعداد
const numberToEnglish = (str) =>
  String(str).replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
const numberToPersian = (str) =>
  String(str).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const CustomTextarea = ({
  id,
  label,
  value,
  onChange,
  className,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = isFocused || (value && value.length > 0);

  const labelVariants = {
    initial: {
      top: "24px",
      scale: 1,
      color: "#a9aaab",
    },
    animate: {
      top: "8px",
      scale: 0.85,
      color: "#6b1400",
    },
  };

  const charCounterColor =
    maxLength && value.length > maxLength ? "text-red-500" : "text-gray-400";

  // ✅ تابع جدید برای مدیریت تغییرات ورودی
  const handleChange = (e) => {
    // ورودی کاربر (که ممکن است فارسی باشد) را به انگلیسی تبدیل می‌کنیم
    const englishValue = numberToEnglish(e.target.value);
    // مقدار انگلیسی را به کامپوننت والد ارسال می‌کنیم
    if (onChange) {
      onChange(englishValue);
    }
  };

  return (
    <div className={twMerge("relative w-full font-azar", className)}>
      <motion.label
        htmlFor={id}
        variants={labelVariants}
        initial="initial"
        animate={isFloating ? "animate" : "initial"}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute right-4 origin-right pointer-events-none font-semibold"
      >
        {label}
      </motion.label>

      <textarea
        id={id}
        rows="5"
        // ✅ مقدار انگلیسی (از state) را به فارسی تبدیل کرده و به کاربر نمایش می‌دهیم
        value={numberToPersian(value || "")}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // ✅ از تابع جدید handleChange استفاده می‌کنیم
        onChange={handleChange}
        className={twMerge(
          "w-full p-4 pt-8 bg-white border-2 border-gray-200 rounded-xl outline-none transition-colors duration-300 text-gray-800 resize-none focus:border-red-600 text-right"
        )}
      />

      <div className="absolute bottom-2 left-4 right-4 flex justify-between items-center">
        {maxLength && (
          <span className={`text-xs font-medium ${charCounterColor}`}>
            {/* ✅ اعداد شمارشگر هم به فارسی نمایش داده می‌شوند */}
            {numberToPersian(String(value ? value.length : 0))} /{" "}
            {numberToPersian(String(maxLength))}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomTextarea;

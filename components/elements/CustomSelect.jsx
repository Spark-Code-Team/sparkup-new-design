// components/LivelySelect.js
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

// کامپوننت آیکون شورون (پیکان)
const ChevronIcon = ({ isOpen }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className="w-5 h-5 text-zinc-400"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </motion.svg>
);

const CustomSelect = ({ label, options, onSelect, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option); // پاس دادن کل آبجکت option
    }
  };

  const isFloating = isOpen || selectedOption;
  const isFocused = isOpen; // حالت فوکوس را معادل باز بودن لیست در نظر می‌گیریم

  // انیمیشن‌های کانتینر اصلی (دقیقا مشابه قبل)
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
      scale: 0.6,
      color: isFocused ? "#103b69" : "#00000",
    },
  };

  // انیمیشن لیست گزینه‌ها
  const listVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  return (
    <div style={{ perspective: "1000px" }} ref={selectRef}>
      <motion.div
        variants={containerVariants}
        initial="rest"
        whileHover="hover"
        animate={isFocused ? "focus" : "rest"}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className={twMerge(
          "'relative inline-flex min-w-56 h-16 rounded-xl bg-gradient-to-br from-red-300 to-orange-300 cursor-pointer  items-center px-4",
          className
        )}
      >
        <div className="w-full">
          <motion.label
            variants={labelVariants}
            initial="initial"
            animate={isFloating ? "animate" : "initial"}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute origin-right pointer-events-none text-lg"
          >
            {label}
          </motion.label>
          {selectedOption && (
            <span className="absolute top-1/2 -translate-y-1/4 text-sky-700 text-base">
              {selectedOption.label}
            </span>
          )}
        </div>
        <ChevronIcon isOpen={isOpen} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute z-10 w-full mt-2 bg-gradient-to-br from-red-300 to-orange-300 rounded-lg shadow-2xl overflow-hidden"
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className="px-4 py-3 text-white hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 cursor-pointer transition-all duration-500 ease-in-out"
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;

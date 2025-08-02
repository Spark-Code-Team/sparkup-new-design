"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FaCalendarAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const JalaliDateTimePicker = ({ value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(value ? value : null);
  const pickerRef = useRef();

  useOnClickOutside(pickerRef, () => setIsOpen(false));

  const handleConfirm = () => {
    onChange && onChange(date ? date.toDate() : null);
    setIsOpen(false);
  };

  return (
    <div className="relative font-sans w-full max-w-xs" ref={pickerRef}>
      <div
        onClick={() => setIsOpen((o) => !o)}
        className={twMerge(
          "flex cursor-pointer items-center justify-between rounded-xl border-2border-gray-300 bg-white p-3 shadow-sm transition-all duration-300 hover:border-red-500 dark:border-gray-600  dark:bg-orange-200 dark:hover:border-red-500",
          className
        )}
      >
        <span className="font-azar font-bold text-gray-700 dark:text-red-950">
          {date
            ? date.format("YYYY/MM/DD - HH:mm")
            : "تاریخ و زمان را انتخاب کنید"}
        </span>
        <FaCalendarAlt className="text-red-800" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-2 z-20 w-full"
          >
            <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-orange-700/60">
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                value={date}
                onChange={setDate}
                format="YYYY/MM/DD HH:mm"
                plugins={[
                  <TimePicker key="tp" position="bottom" hideSeconds />,
                ]}
                input={false}
                containerClassName="w-full font-azar"
                className="red-orange-theme font-azar"
                inputClass="w-full py-1 px-3 rounded-lg text-black"
              />
              <motion.button
                onClick={handleConfirm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-600 py-2.5 font-bold text-white shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                تایید
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JalaliDateTimePicker;

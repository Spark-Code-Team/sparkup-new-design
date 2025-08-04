"use client";

import { useState, useEffect } from "react";
import { PulsingBeacon } from "@/components/animations/PulsingBeacon";
import CustomButton from "@/components/elements/CustomButton";
import CustomInput from "@/components/elements/CustomInput";
import JalaliDateTimePicker from "@/components/elements/JalaliDateTimePicker";
import TitlePages from "@/components/module/TitlePages";
import CustomSelect from "./CustomSelect";
import CustomTextarea from "./CustomTextArea";
import CustomFileUpload from "./CustomUploadFile";
import { motion } from "framer-motion";
import { FaWatchmanMonitoring } from "react-icons/fa";

const componentMap = {
  CustomInput,
  JalaliDateTimePicker,
  CustomButton,
  CustomSelect,
  CustomTextarea,
  CustomFileUpload,
};

const DynamicForm = ({ formConfig, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialData)
      setFormData((prevData) => ({ ...prevData, ...initialData }));
  }, [initialData]);

  const handleChange = (id, value) =>
    setFormData((prevData) => ({ ...prevData, [id]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(formData);
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-sky-900 border-4 border-cyan-600 text-white font-azar flex flex-col items-center justify-evenly gap-8 p-8 rounded-2xl shadow-lg space-y-6 m-2 md:m-0"
    >
      <h2 className="text-base md:text-2xl flex flex-row items-center justify-evenly gap-10 font-bold text-white">
        <PulsingBeacon className={"md:w-10 md:h-10 w-4 h-4"} />{" "}
        {formConfig.headerText}
      </h2>
      {formConfig.rows.map((row) => (
        <div
          key={row.id}
          className="flex w-full flex-col md:flex-row items-center justify-evenly gap-4"
        >
          {row.fields.map((field) => {
            const Component = componentMap[field.component];
            if (!Component) return null;
            return (
              <Component
                key={field.id}
                {...field}
                value={formData[field.id] || ""}
                onChange={(val) => handleChange(field.id, val)}
              />
            );
          })}
        </div>
      ))}

      <CustomButton isLoading={isLoading}>
        {formConfig.submitButtonText}
      </CustomButton>
    </form>
  );
};
export default DynamicForm;

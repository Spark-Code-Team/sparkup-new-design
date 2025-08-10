"use client";

import { useState, useEffect } from "react";
import { PulsingBeacon } from "@/components/animations/PulsingBeacon";
import CustomButton from "@/components/elements/CustomButton";
import CustomInput from "@/components/elements/CustomInput";
import JalaliDateTimePicker from "@/components/elements/JalaliDateTimePicker";
import apiClient from "@/lib/apiClient";
import CustomSelect from "./CustomSelect";
import CustomTextarea from "./CustomTextArea";
import CustomFileUpload from "./CustomUploadFile";

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

    const { api, onSuccess, onError } = formConfig;

    let requestData = formData;
    const config = {
      headers: {},
    };

    if (api.submissionType === "formData") {
      const data = new FormData();
      for (const key in requestData) {
        if (requestData[key] !== null && requestData[key] !== undefined) {
          data.append(key, requestData[key]);
        }
      }
      requestData = data;
    } else if (api.submissionType === "urlencoded") {
      const params = new URLSearchParams();
      for (const key in requestData) {
        if (requestData[key] !== null && requestData[key] !== undefined) {
          params.append(key, requestData[key]);
        }
      }
      requestData = params;
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    console.log("\n data ----------------------------- \t ", requestData);

    try {
      const response = await apiClient({
        url: api.url,
        method: api.method,
        data: requestData,
        ...config
      });

      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
      setFormData({});
    }
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

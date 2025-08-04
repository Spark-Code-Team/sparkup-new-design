"use client";

import { useState } from "react";

const CustomFileUpload = ({ id, label, onChange }) => {
  const [fileName, setFileName] = useState("فایلی انتخاب نشده");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
    }
  };
  return (
    <div className="w-full font-azar">
      <label className="font-semibold text-gray-200 block mb-2">{label}</label>
      <label className="w-full mt-2 p-3 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-red-500/70 transition-colors duration-300">
        <span className="text-white font-bold">انتخاب فایل</span>
        <span className="text-sm text-gray-300 mt-1">{fileName}</span>
        <input
          type="file"
          id={id}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.doc,.docx"
          required
        />
      </label>
    </div>
  );
};

export default CustomFileUpload;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// فرض می‌شود این کامپوننت‌ها و داده‌ها از مسیرهای درست وارد شده‌اند
import DynamicForm from "@/components/elements/DynamicForm";
import JobCard from "@/components/elements/JobCard";
import { jobOpenings } from "@/components/constants/jobs";
import { useToast } from "@/components/context/ToastContext";

const JobOpportunities = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("jobs");
  const { addToast } = useToast();

  // ✅ این state دیگر برای مقداردهی اولیه لازم نیست، پس حذف می‌شود
  // const [initialFormData, setInitialFormData] = useState({ position: "" });

  const jobApplicationFormConfig = {
    headerText: "فرم درخواست شغلی",
    submitButtonText: "ارسال درخواست",
    rows: [
      {
        id: "row1",
        fields: [
          {
            id: "fullName",
            component: "CustomInput",
            label: "اسم و نام خانوادگی",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "row2",
        fields: [
          {
            id: "position",
            component: "CustomSelect",
            label: "شغل مورد نظر",
            options: jobOpenings.map((j) => ({
              value: j.title,
              label: j.title,
            })),
            required: true,
          },
        ],
      },
      {
        id: "row3",
        fields: [
          {
            id: "resume",
            component: "CustomFileUpload",
            label: "رزومه (PDF, DOCX)",
            required: true,
          },
        ],
      },
      {
        id: "row4",
        fields: [
          {
            id: "portfolioLink",
            component: "CustomInput",
            label: "لینک پروفایل لینکدین یا نمونه کار (اختیاری)",
            type: "url",
          },
        ],
      },
      {
        id: "row5",
        fields: [
          {
            id: "coverLetter",
            component: "CustomTextarea",
            label: "چرا فکر می‌کنی مناسب این شغل هستی؟",
            maxLength: 1000,
          },
        ],
      },
    ],
  };

  const handleCardClick = (index) => {
    const newIndex = expandedIndex === index ? null : index;
    setExpandedIndex(newIndex);
  };

  const handleFormSubmit = async (formData) => {
    console.log("Contact Form Data:", formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    addToast("رزومه شما با موفقیت دریافت شد!", "success");
  };

  const tabContentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            به تیم ما بپیوند!
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            ما همیشه دنبال افراد خلاق و بااستعداد مثل شما هستیم. فرصت‌های شغلی
            فعلی رو بررسی کن!
          </p>
        </motion.div>

        {/* چیدمان دسکتاپ */}
        <div className="hidden lg:grid grid-cols-2 gap-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              🔻 فرصت‌های شغلی فعلی:
            </h2>
            {jobOpenings.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                isExpanded={expandedIndex === index}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                🔻 چرا باید به تیم اسپارک‌آپ بپیوندی؟
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ما تو اسپارک‌آپ، همه‌چی رو با خلاقیت و هیجان انجام می‌دیم...
              </p>
            </div>
            {/* ✅ پراپ initialData از فرم حذف شده است */}
            <DynamicForm
              formConfig={jobApplicationFormConfig}
              onSubmit={handleFormSubmit}
            />
          </motion.div>
        </div>

        {/* رابط کاربری موبایل */}
        <div className="lg:hidden">
          <div className="flex bg-gray-200 p-1 rounded-xl mb-6">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`w-1/2 p-3 rounded-lg font-bold transition-colors ${
                activeTab === "jobs" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              فرصت‌های شغلی
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`w-1/2 p-3 rounded-lg font-bold transition-colors ${
                activeTab === "form" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              فرم درخواست
            </button>
          </div>
          <AnimatePresence mode="wait">
            {activeTab === "jobs" && (
              <motion.div
                key="jobs"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🔻 فرصت‌های شغلی فعلی:
                </h2>
                {jobOpenings.map((job, index) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isExpanded={expandedIndex === index}
                    onClick={() => handleCardClick(index)}
                  />
                ))}
              </motion.div>
            )}
            {activeTab === "form" && (
              <motion.div
                key="form"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    🔻 چرا باید به تیم اسپارک‌آپ بپیوندی؟
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    ما تو اسپارک‌آپ، همه‌چی رو با خلاقیت و هیجان انجام می‌دیم...
                  </p>
                </div>
                {/* ✅ پراپ initialData از فرم حذف شده است */}
                <DynamicForm
                  formConfig={jobApplicationFormConfig}
                  onSubmit={handleFormSubmit}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;

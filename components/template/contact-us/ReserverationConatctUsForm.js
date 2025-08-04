"use client";

import { useToast } from "@/components/context/ToastContext";
import DynamicForm from "@/components/elements/DynamicForm";

export default function ReservationContactUsForm() {
  const { addToast } = useToast();

  const contactFormConfig = {
    title: null,
    subtitle: null,
    headerText: "فقط کافیه چند ثانیه وقت بزاری و این فرم رو پرش کنی!",
    submitButtonText: "بفرست بره!",
    rows: [
      {
        id: "row1",
        fields: [
          {
            id: "first_name",
            label: "اسمت چیه؟",
            component: "CustomInput",
            className: "md:w-96",
          },
          {
            id: "email",
            label: "ایمیلت رو بذار!",
            component: "CustomInput",
            type: "email",
            className: "md:w-96",
          },
        ],
      },
      {
        id: "row2",
        fields: [
          {
            id: "about",
            label: "چی تو ذهنت هست؟ راحت بنویس، ما می‌خونیم و جواب می‌دیم!",
            component: "CustomInput",
            className: "md:w-96 text-sm px-10",
          },
          {
            id: "calender",
            label: "یه تاریخ بزاریم؟",
            component: "JalaliDateTimePicker",
            type: "number",
            className: "w-auto md:ml-12",
          },
        ],
      },
    ],
  };

  const handleFormSubmit = async (formData) => {
    console.log("Contact Form Data:", formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    addToast("پیام شما با موفقیت ارسال شد!", "success");
  };

  return (
    <div className="flex items-center justify-center py-10">
      <DynamicForm formConfig={contactFormConfig} onSubmit={handleFormSubmit} />
    </div>
  );
}

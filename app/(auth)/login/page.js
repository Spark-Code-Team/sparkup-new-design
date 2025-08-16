"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DynamicForm from "@/components/elements/DynamicForm";
import { useToast } from "@/components/context/ToastContext";

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams(); // حالا زیر Suspense هست و خطای build نمی‌دهد
  const { addToast } = useToast();

  const loginFormConfig = {
    headerText: "ورود به پنل مدیریت",
    submitButtonText: "ورود",
    rows: [
      {
        id: "row1",
        fields: [
          {
            id: "username",
            label: "نام کاربری",
            component: "CustomInput",
            type: "text",
            className: "md:w-96",
            required: true,
          },
        ],
      },
      {
        id: "row2",
        fields: [
          {
            id: "password",
            label: "رمز عبور",
            component: "CustomInput",
            type: "password",
            className: "md:w-96",
            required: true,
          },
        ],
      },
    ],
    api: {
      url: "token",
      method: "POST",
      submissionType: "urlencoded",
    },
    onSuccess: () => {
      addToast("با موفقیت وارد شدید!", "success");
      router.refresh();
    },
    onError: (error) => {
      console.error("Login failed:", error);
      addToast("نام کاربری یا رمز عبور اشتباه است.", "error");
    },
  };

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <DynamicForm formConfig={loginFormConfig} />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  );
}

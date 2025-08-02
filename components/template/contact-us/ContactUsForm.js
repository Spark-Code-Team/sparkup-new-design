"use client";
import { PulsingBeacon } from "@/components/animations/PulsingBeacon";
import CustomInput from "@/components/elements/CustomInput";
import CustomButton from "@/components/elements/CustomButton";
import { useState } from "react";
import { useToast } from "@/components/context/ToastContext";

export default function ContactUsForm() {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-10 md:w-4/6 border-4 p-10 border-cyan-500 bg-sky-800 rounded-lg shadow-md">
        <div className="font-azar flex flex-row items-center justify-evenly gap-4 md:gap-10 font-bold text-xs md:text-lg text-white border-b-2 border-white py-8">
          <h2>
            <p>فقط کافیه چند ثانیه وقت بزاری و این فرم رو پرش کنی !</p>
          </h2>
          <PulsingBeacon className={"md:w-8 md:h-8 w-4 h-4"} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 w-full ">
          <CustomInput
            className={"md:w-96"}
            id={"first_name"}
            label={"اسمت چیه؟"}
          />
          <CustomInput
            id={"email"}
            label={"ایمیلت رو بذار تا بتونیم جواب بدیم!"}
            className={" md:w-96 "}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 w-full ">
          <CustomInput
            bg-red-300
            id={"about"}
            label={"در مورد چی می‌خوای حرف بزنیم؟"}
            className={"md:w-96"}
          />
          <CustomInput
            id={"phone"}
            label={"شماره تماس"}
            type="number"
            className={"md:w-96"}
          />
        </div>
        <CustomButton
          children={"بفرست بره!"}
          isLoading={isLoading}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              addToast("ارسال شد", "success");
              setIsLoading(false);
            }, 2000);
          }}
        />
      </div>
    </>
  );
}

"use client";

import { PulsingBeacon } from "@/components/animations/PulsingBeacon";
import { useToast } from "@/components/context/ToastContext";
import CustomButton from "@/components/elements/CustomButton";
import CustomInput from "@/components/elements/CustomInput";
import JalaliDateTimePicker from "@/components/elements/JalaliDateTimePicker";
import TitlePages from "@/components/module/TitlePages";
import { useState } from "react";

export default function ReservationContactUsForm() {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [selectedDateTime, setSelectedDateTime] = useState(null);
  return (
    <>
      <div className="flex flex-col items-center justify-evenly gap-10 w-full">
        <div>
          <TitlePages title={"رزرو وقت مشاوره"} />
        </div>
        <div className="font-azar  text-center">
          <h3 className=" font-medium text-lg">
            <p>وقتشه یه گپ باحال بزنیم!</p>
          </h3>
          <br />
          <h5 className="text-base">
            <p>
              {" "}
              ما اینجاییم تا رفاقتی بشینیم، نیازتو بشنویم و برات یه راه‌حل
              بسازیم. بدون تعهد، بدون هزینه. فقط یه گپ دوستانه!
            </p>
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-10 md:w-4/6 border-4 p-10 border-cyan-500 bg-sky-800 rounded-lg shadow-md">
          <div className="font-azar flex flex-row items-center justify-evenly gap-4 md:gap-10 font-bold text-xs md:text-lg text-white border-b-2 border-white py-8">
            <h2>
              <p>فقط کافیه چند ثانیه وقت بزاری و این فرم رو پرش کنی !</p>
            </h2>
            <PulsingBeacon className={"md:h-10 md:w-10 h-4 w-4"} />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 w-full">
            <CustomInput
              className={"md:w-96"}
              id={"first_name"}
              label={"اسمت چیه؟"}
            />
            <CustomInput
              id={"phone"}
              label={"شماره تماس"}
              type="number"
              className={"md:w-96"}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-20 w-full ">
            <CustomInput
              bg-red-300
              id={"about"}
              label={"در مورد چی می‌خوای حرف بزنیم؟"}
              className={"md:w-96"}
            />

            <JalaliDateTimePicker
              value={selectedDateTime}
              onChange={setSelectedDateTime}
              id={"تاریخ"}
              label={"یه تاریخ بهم بگو"}
              className={'md:w-[250px]'}
            />
          </div>
          <CustomButton
            children={"تاییدش کن که بریم!"}
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
      </div>
    </>
  );
}

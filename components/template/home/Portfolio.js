"use client";
import React from "react";
// Import Swiper React components

// import required modules
import TitlePages from "../../module/TitlePages";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/elements/CustomButton";
import CustomSwiper from "@/components/elements/CustomSwiper";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      image: "/images/frame1.png",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
    {
      id: 2,
      image: "/images/sample-proje.png",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
    {
      id: 3,
      image: "/images/frame2.png",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
    {
      id: 4,
      image: "/images/frame1.png",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
  ];

  return (
    <div className={"flex flex-col items-center justify-evenly gap-2"}>
      <div className="">
        <TitlePages title="نمونه‌کارها" />
      </div>
      <div className="font-azar font-semibold text-lg">
        <h3>
          <p>یه کم از کارای خفن‌مون</p>
        </h3>
      </div>

      <div className="font-azar font-normal text-lg">
        <h4>
          <p>اینا فقط یه گوشه کوچولو از چیزاییه که با هم ساختیم!</p>
        </h4>
      </div>
      <div className="w-full lg:pr-14 lg:pl-14 pr-0 pl-0  mt-10">
        <CustomSwiper>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center h-full"
            >
              <div className="w-full aspect-square relative mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="w-full text-center font-medium">{item.title}</p>
            </div>
          ))}
        </CustomSwiper>
      </div>
      <div className="mt-4">
        <CustomButton>پروژه‌های بیشتری ببین</CustomButton>
      </div>
    </div>
  );
};

export default Portfolio;

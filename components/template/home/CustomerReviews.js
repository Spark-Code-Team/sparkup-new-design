"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TitlePages from "../../module/TitlePages";
import CardCustomerReview from "../../module/CardCustomerReview";
import CustomSwiper from "@/components/elements/CustomSwiper";

const CustomerReviews = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="block">
        <TitlePages title="رضایت مشتریان" />
      </div>

      <div className="w-full">
        <div className="w-full ">
          <CustomSwiper>
            {items.map((item) => (
              <div className="flex flex-row items-center justify-center">
                <CardCustomerReview />
              </div>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;

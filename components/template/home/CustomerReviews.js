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

const CustomerReviews = () => {
  const items = [1, 2, 3, 4, 5,6];

  return (
    <>
      <div className="block">
        <TitlePages title="نظرات مشتریان" />
      </div>

      <div className="w-full lg:pr-14 lg:pl-14 px-5 lg:mt-16 mt-10">
        <div className="w-full m-auto mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={18}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              650: {
                slidesPerView: 1, // در حالت موبایل، 1 کارت نشان داده می‌شود
              },
              1024: {
                slidesPerView: 3, // در حالت دسکتاپ، 3 کارت نشان داده می‌شود
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <CardCustomerReview />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;

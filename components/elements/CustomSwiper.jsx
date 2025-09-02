"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "@/public/css/swiperStyle.css";

function CustomSwiper({ children }) {
  return (
    <div className="w-full m-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        // برای SSR و تغییر سایز کانتینر
        observer={true}
        observeParents={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // UX بهتر روی دسکتاپ
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1, // کمی کراپ برای حس حرکت بهتر
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="my-minimal-swiper"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomSwiper;

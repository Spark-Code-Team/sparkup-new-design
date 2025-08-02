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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
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

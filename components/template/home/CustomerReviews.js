"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import TitlePages from "../../module/TitlePages";
import Image from "next/image";
import CardCustomerReview from "../../module/CardCustomerReview";

const CustomerReviews = ()=>{

    return(

        <>

            <TitlePages title="نظرات مشتریان"/>

            <div className="w-full mt-8">

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                    <SwiperSlide>

                        <CardCustomerReview/>

                    </SwiperSlide>

                    <SwiperSlide>

                        <CardCustomerReview/>

                    </SwiperSlide>

                    <SwiperSlide>

                        <CardCustomerReview/>

                    </SwiperSlide>

                </Swiper>

            </div>

        </>

    )

}


export default CustomerReviews;
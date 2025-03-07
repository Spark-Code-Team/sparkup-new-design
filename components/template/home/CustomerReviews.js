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
import Link from "next/link";
import Image from "next/image";
import CardCustomerReview from "../../module/CardCustomerReview";

const CustomerReviews = ()=>{

    const items = [1 , 2 , 3 , 4];

    return(

        <>

            <div className="lg:hidden block">
                <TitlePages title="نظرات مشتریان"/>
            </div>

            <div className="w-full lg:pr-14 lg:pl-14 pr-0 pl-0 lg:mt-16 mt-10">

                <div className="w-full m-auto text-[18px] font-bold hidden lg:flex justify-between">
                    <p>نظرات مشتریان</p>
                    <Link href="/" className="text-[#C1121F]"> مشاهده بیشتر</Link>
                </div>

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

                        {
                            items.map((item , index)=>(

                                <SwiperSlide key={index}>

                                    <CardCustomerReview/>

                                </SwiperSlide>

                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </>

    )

}


export default CustomerReviews;
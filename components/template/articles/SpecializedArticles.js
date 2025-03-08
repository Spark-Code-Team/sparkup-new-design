"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";

const SpecializedArticles = ()=>{

    return(

        <>

            <div className="w-full m-auto mt-12 text-[18px]">

                <div className="w-full m-auto font-bold pr-12 pl-12">مقالات تخصصی</div>

                <div className="w-full m-auto mt-6 lg:pr-5 lg:pl-0 pr-4 pl-4">

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
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
                        <SwiperSlide>

                            <div className="lg:w-[392px] lg:min-h-[429px] pt-4 pb-4 pr-3 pl-3 border-[1.5px] border-[#EDEDED] rounded-3xl">

                                <div className="lg:w-[360px] lg:h-[269px] m-auto flex justify-center">
                                    <Image src="/images/article1.png" alt="" width={360} height={269}/>
                                </div>

                                <div className="w-full m-auto mt-4 font-bold">کدنویسی یا وردپرس؟ کدام یک برای ساخت سایت بهتر است؟</div>

                                <div className="w-full m-auto mt-4 text-[15px]"> در دنیای امروز، ساخت یک وبسایت به یکی از نیازهای اساسی افراد و کسب‌وکارها تبدیل شده است. دو روش اصلی برای ساخت سایت وجود دارد:</div>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="lg:w-[392px] lg:min-h-[429px] pt-4 pb-4 pr-3 pl-3 border-[1.5px] border-[#EDEDED] rounded-3xl">

                                <div className="lg:w-[360px] lg:h-[269px] m-auto">
                                    <Image src="/images/article1.png" alt="" width={360} height={269}/>
                                </div>

                                <div className="w-full m-auto mt-4 font-bold">کدنویسی یا وردپرس؟ کدام یک برای ساخت سایت بهتر است؟</div>

                                <div className="w-full m-auto mt-4 text-[15px]">در دنیای امروز، ساخت یک وبسایت به یکی از نیازهای اساسی افراد و کسب‌وکارها تبدیل شده است. دو روش اصلی برای ساخت سایت وجود دارد:</div>

                            </div>

                        </SwiperSlide>


                        <SwiperSlide>

                            <div className="lg:w-[392px] lg:min-h-[429px] pt-4 pb-4 pr-3 pl-3 border-[1.5px] border-[#EDEDED] rounded-3xl">

                                <div className="lg:w-[360px] lg:h-[269px] m-auto">
                                    <Image src="/images/article1.png" alt="" width={360} height={269}/>
                                </div>

                                <div className="w-full m-auto mt-4 font-bold">کدنویسی یا وردپرس؟ کدام یک برای ساخت سایت بهتر است؟</div>

                                <div className="w-full m-auto mt-4 text-[15px]">در دنیای امروز، ساخت یک وبسایت به یکی از نیازهای اساسی افراد و کسب‌وکارها تبدیل شده است. دو روش اصلی برای ساخت سایت وجود دارد:</div>

                            </div>

                        </SwiperSlide>


                        <SwiperSlide>

                            <div className="lg:w-[392px] lg:min-h-[429px] pt-4 pb-4 pr-3 pl-3 border-[1.5px] border-[#EDEDED] rounded-3xl">

                                <div className="lg:w-[360px] lg:h-[269px] m-auto">
                                    <Image src="/images/article1.png" alt="" width={360} height={269}/>
                                </div>

                                <div className="w-full m-auto mt-4 font-bold">کدنویسی یا وردپرس؟ کدام یک برای ساخت سایت بهتر است؟</div>

                                <div className="w-full m-auto mt-4 text-[15px]">در دنیای امروز، ساخت یک وبسایت به یکی از نیازهای اساسی افراد و کسب‌وکارها تبدیل شده است. دو روش اصلی برای ساخت سایت وجود دارد:</div>

                            </div>

                        </SwiperSlide>


                    </Swiper>

                </div>

            </div>

        </>

    )

}


export default SpecializedArticles;
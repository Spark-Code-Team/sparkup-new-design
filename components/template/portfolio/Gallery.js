"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";

const Gallery = ()=>{

    return(

        <>

            <div className="w-full bg-green-500 lg:pr-14 lg:pl-14 pr-0 pl-0 lg:mt-16 mt-10">

                <div className="w-full m-auto text-[18px] font-bold hidden lg:flex justify-between">
                    <p>گالری تصویر</p>
                    <Link href="/" className="text-[#C1121F]"> مشاهده بیشتر</Link>
                </div>

                <div className="w-full m-auto mt-8">

                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'3'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src="/images/frame1.png" alt="" width={400} height={400} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/images/frame2.png" alt="" width={400} height={400} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/images/frame1.png" alt="" width={400} height={400} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/images/frame2.png" alt="" width={400} height={400} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/images/frame1.png" alt="" width={400} height={400} />
                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>

        </>

    )

}


export default Gallery;
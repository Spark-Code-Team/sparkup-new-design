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
import Link from "next/link";

const OfflineAdvertisingProject = ()=>{

    return(

        <>

            <div className="w-full">

                <div className="w-[90%] m-auto mt-10">

                    <div className="w-full m-auto mt-10">

                        <p className="text-[18px] font-bold">نمونه پروژه های تبلیغات آفلاین</p>

                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                            <SwiperSlide>

                                <div className="w-full mt-7">
                                    <Image src="/images/offline-sample.png" alt="" width={392} height={412}/>
                                    <p className="mt-4 text-center font-bold">طراحی سایت فروشگاهی طلا و جواهرات</p>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="w-full mt-7">
                                    <Image src="/images/offline-sample.png" alt="" width={392} height={412}/>
                                    <p className="mt-5 text-center font-bold">طراحی سایت فروشگاهی طلا و جواهرات</p>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="w-full mt-7">
                                    <Image src="/images/offline-sample.png" alt="" width={392} height={412}/>
                                    <p className="mt-5 text-center font-bold">طراحی سایت فروشگاهی طلا و جواهرات</p>
                                </div>

                            </SwiperSlide>

                        </Swiper>

                        <Link href="#" className="w-full h-[40px] border-2 border-[#C1121F] text-[#C1121F] flex justify-center items-center mt-5 rounded-[12px]">مشاهده همه</Link>


                    </div>

                </div>

            </div>

        </>

    )

}


export default OfflineAdvertisingProject;
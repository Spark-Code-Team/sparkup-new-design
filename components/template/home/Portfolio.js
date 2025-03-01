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

const Portfolio = ()=>{

    return(

        <>

            <div className="w-full text-center flex justify-center gap-x-5 text-[20px] flex-wrap items-center mt-[800px] font-bold">

                <Image src="/images/bg1.png" alt="" width={42} height={12}/>
                نمونه کارهای اخیر
                <Image src="/images/bg2.png" alt="" width={42} height={12}/>

            </div>

            <div className="w-[90%] m-auto mt-10">

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>

                        <div className="w-full">
                            <Image src="/images/frame1.png" alt="" width={1200} height={400}/>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="w-full">
                            <Image src="/images/frame1.png" alt="" width={1200} height={400}/>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="w-full">
                            <Image src="/images/frame1.png" alt="" width={1200} height={400}/>
                        </div>

                    </SwiperSlide>

                </Swiper>

            </div>

        </>

    )

}


export default Portfolio;
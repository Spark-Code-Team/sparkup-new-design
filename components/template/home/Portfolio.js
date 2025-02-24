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

            <TitlePages router="نمونه کارهای اخیر"/>

            <div className="w-[90%] m-auto mt-10">

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>

                        <div className="w-full bg-blue-400">
                            <Image src="/images/frame1.png" alt="" width={1200} height={400}/>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="w-full bg-blue-400">
                            <Image src="/images/img2.webp" alt="" width={1200} height={400}/>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="w-full bg-blue-400">
                            <Image src="/images/img1.webp" alt="" width={1200} height={400}/>
                        </div>

                    </SwiperSlide>

                </Swiper>

            </div>

        </>

    )

}


export default Portfolio;
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
import Link from "next/link";

const SampleProje = ()=>{

    const items = [
        {id:1 , image:"/images/frame1.png" , title:"طراحی سایت فروشگاهی طلا و جواهرات"},
        {id:2 , image:"/images/sample-proje.png" , title:"طراحی سایت فروشگاهی طلا و جواهرات"},
        {id:3 , image:"/images/frame2.png" , title:"طراحی سایت فروشگاهی طلا و جواهرات"},
        {id:4 , image:"/images/frame1.png" , title:"طراحی سایت فروشگاهی طلا و جواهرات"},
    ];

    return(

        <>

            <div className="w-full lg:pr-14 lg:pl-14 pr-0 pl-0 lg:mt-16 mt-10">

                <div className="w-full m-auto text-[18px] font-bold flex justify-between pr-5 pl-5">
                    <p>نمونه کارهای اخیر</p>
                    <Link href="/" className="text-[#C1121F] lg:block hidden"> مشاهده بیشتر</Link>
                </div>

                <div className="w-full m-auto mt-8">

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

                        {
                            items.map((item , index)=>(

                                <SwiperSlide key={index}>

                                    <div className="lg:w-[392px] h-[412px] w-[90%] m-auto flex flex-wrap justify-center items-center">
                                        <Image src={item.image} alt="" width={335} height={412}/>
                                        <p className="w-full text-center mb-5">{item.title}</p>
                                    </div>

                                </SwiperSlide>

                            ))
                        }

                    </Swiper>

                    <button className="w-[90%] h-[40px] border-2 border-[#C1121F] text-[#C1121F] m-auto mt-8 block lg:hidden rounded-xl">مشاهده همه</button>

                </div>

            </div>

        </>

    )

}


export default SampleProje;
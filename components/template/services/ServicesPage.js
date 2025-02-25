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
import Link from "next/link";

const ServicesPage = ()=>{

    return(

        <>

            <TitlePages title="خدمات اسپارک"/>

            <div className="w-full bg-lime-500">

                <div className="w-[90%] bg-red-500 m-auto mt-10">











                </div>

            </div>

        </>

    )

}


export default ServicesPage;
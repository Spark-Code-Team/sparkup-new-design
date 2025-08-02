"use client";
import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';
import TitlePages from "../../module/TitlePages";
import TeamModule from "../../module/TeamModule";

const Team = () => {

    const items = [
        {id: 1, image: "/images/team1.png", name: "امیر"},
        {id: 2, image: "/images/team2.png", name: "مینا"},
        {id: 3, image: "/images/team1.png", name: "غزل"},
        {id: 4, image: "/images/team2.png", name: "سارا"},
        {id: 5, image: "/images/team1.png", name: "محمد"},
        {id: 6, image: "/images/team2.png", name: "محسن"},
        {id: 7, image: "/images/team1.png", name: "زهرا"},
        {id: 8, image: "/images/team2.png", name: "آسیه"},        
        {id: 9, image: "/images/team2.png", name: "نرگس"},

    ];
    return (

        <>

            <div className="block">
                <TitlePages title="تیم ما"/>
            </div>

            <div className="w-full mx-auto lg:pr-14 lg:pl-14 px-5 lg:mt-16 mt-10">

                {/*<div className="w-full m-auto text-[18px] font-bold hidden lg:block">*/}
                {/*    <p>تیم ما</p>*/}
                {/*</div>*/}

                <div className="m-auto mt-8">

                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            650: {
                                slidesPerView: 2, // در حالت موبایل، 1 کارت نشان داده می‌شود
                            },
                            1024: {
                                slidesPerView: 6, // در حالت دسکتاپ، 3 کارت نشان داده می‌شود
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        {
                            items.map((item, index) => (

                                <SwiperSlide key={index}>

                                    <TeamModule {...item}/>

                                </SwiperSlide>

                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </>

    )

}


export default Team;
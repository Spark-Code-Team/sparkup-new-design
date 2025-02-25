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

const Team = ()=>{

    return(

        <>

            <TitlePages title="تیم ما"/>

            <div className="w-full mt-10">

                <div className="w-[90%] m-auto">


                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                        <SwiperSlide>

                            <div className="w-full m-auto flex flex-wrap">
                                <div className="w-1/2">

                                    <div className="w-[80%] m-auto rounded-[100px] relative group">
                                        <Image src="/images/team1.png" alt="" className="hover:opacity-70" width={184} height={366}/>
                                        <p className="absolute top-1/2 right-5 transform -translate-y-1/2 font-bold text-white opacity-0 group-hover:opacity-90 text-xl">امیر ترقی</p>
                                    </div>

                                </div>

                                <div className="w-1/2">

                                    <div className="w-[80%] m-auto rounded-[100px] relative group">
                                        <Image src="/images/team2.png" alt="" className="hover:opacity-70" width={184} height={366}/>
                                        <p className="absolute top-1/2 right-5 transform -translate-y-1/2 font-bold text-white opacity-0 group-hover:opacity-90 text-xl">غزل</p>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="w-full m-auto flex flex-wrap">
                                <div className="w-1/2">

                                    <div className="w-[80%] m-auto rounded-[100px] relative group">
                                        <Image src="/images/team1.png" alt="" className="hover:opacity-70" width={184} height={366}/>
                                        <p className="absolute top-1/2 right-5 transform -translate-y-1/2 font-bold text-white opacity-0 group-hover:opacity-90 text-xl">مینا</p>
                                    </div>

                                </div>

                                <div className="w-1/2">

                                    <div className="w-[80%] m-auto rounded-[100px] relative group">
                                        <Image src="/images/team2.png" alt="" className="hover:opacity-70" width={184} height={366}/>
                                        <p className="absolute top-1/2 right-5 transform -translate-y-1/2 font-bold text-white opacity-0 group-hover:opacity-90 text-xl">سارا</p>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>

        </>

    )

}


export default Team;
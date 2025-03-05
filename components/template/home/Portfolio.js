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

const Portfolio = ()=>{

    return(

        <>

            {/*   mobile portfolio  */}

            <TitlePages title="نمونه کارهای اخیر"/>

            <div className="lg:hidden w-[90%] m-auto mt-10">

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




            {/*   desktop portfolio  */}


            <div className="lg:block hidden w-full m-auto mt-16 pr-14 pl-14">

                <div className="w-full m-auto flex justify-between text-[18px] font-bold">
                    <p>نمونه کارهای اخیر</p>
                    <Link href="#" className="text-[#C1121F]">مشاهده همه</Link>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className="w-[345px] mt-10">
                            <Image src="/images/frame1.png" alt="" width={345} height={450}/>
                            <div className="w-full mt-4 text-center">طراحی سایت فروشگاهی طلا و جواهرات</div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="w-[345px] mt-10">
                            <Image src="/images/sample-proje.png" alt="" width={345} height={450}/>
                            <div className="w-full mt-4 text-center">طراحی سایت فروشگاهی طلا و جواهرات</div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="w-[345px] mt-10">
                            <Image src="/images/frame2.png" alt="" width={345} height={450}/>
                            <div className="w-full mt-4 text-center">طراحی سایت فروشگاهی طلا و جواهرات</div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="w-[345px] mt-10">
                            <Image src="/images/frame1.png" alt="" width={345} height={450}/>
                            <div className="w-full mt-4 text-center">طراحی سایت فروشگاهی طلا و جواهرات</div>
                        </div>

                    </SwiperSlide>

                </Swiper>

            </div>

        </>

    )

}


export default Portfolio;
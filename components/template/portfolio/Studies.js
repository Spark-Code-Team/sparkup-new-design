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
import Fillter from "../../../public/icons/Fillter";

const Studies = ()=>{

    return(

        <>

            <div className="w-full">

                <div className="w-[90%] m-auto mt-10">

                    <div className="w-full m-auto mt-10">

                        <p className="text-[18px] font-bold pr-5 pt-6">مطالعات موردی</p>

                        <div className="w-full overflow-x-auto whitespace-nowrap py-4 no-scroll">
                            <div className="flex gap-x-3 px-4">
                                <button className="inline-flex items-center px-6 py-2 border-[1.5px] border-[#C2C2C2] rounded-lg text-black">
                                    <Fillter/>فیلتر
                                </button>
                                <button className="inline-flex px-6 py-2 rounded-lg border-[1.5px] border-[#C2C2C2] text-[#878787]">تبلیغات آنلاین</button>
                                <button className="inline-flex px-6 py-2 rounded-lg border-[1.5px] border-[#C2C2C2] text-[#878787]">تبلیغات آفلاین</button>
                                <button className="inline-flex px-6 py-2 rounded-lg border-[1.5px] border-[#C2C2C2] text-[#878787]">استراتژی تبلیغات</button>
                            </div>
                        </div>

                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                            <SwiperSlide>

                                <div className="w-full bg-[#1E1E25] mt-7 pb-10">
                                    <Image src="/images/proje.png" alt="" width={321} height={401}/>

                                    <div className="w-full text-white pr-5 pl-5">پروژه کنسرت هاب</div>

                                    <div className="w-full mt-7 text-white pr-5 pl-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="w-full bg-[#1E1E25] mt-7 pb-10">
                                    <Image src="/images/proje.png" alt="" width={321} height={401}/>

                                    <div className="w-full text-white pr-5 pl-5">پروژه کنسرت هاب</div>

                                    <div className="w-full mt-7 text-white pr-5 pl-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="w-full bg-[#1E1E25] mt-7 pb-10">
                                    <Image src="/images/proje.png" alt="" width={321} height={401}/>

                                    <div className="w-full text-white pr-5 pl-5">پروژه کنسرت هاب</div>

                                    <div className="w-full mt-7 text-white pr-5 pl-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>

                                </div>

                            </SwiperSlide>

                        </Swiper>

                    </div>




                    <div className="w-full bg-[#141416] m-auto mt-12 pb-10 pr-5 pl-5">

                        <Image src="/images/proje2.png" alt="" width={510} height={324}/>

                        <div className="w-full m-auto text-white">پروژه کنسرت هاب</div>

                        <div className="w-full m-auto mt-7 text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>

                    </div>



                </div>

            </div>

        </>

    )

}


export default Studies;
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

                                <div className="w-full bg-[#1E1E25] lg:flex justify-between mt-7 pb-10">

                                    <div className="lg:w-1/2 w-full lg:hidden block">
                                        <Image src="/images/proje.png" alt="" width={321} height={401}/>
                                    </div>

                                    <div className="lg:w-1/2 w-full lg:flex lg:flex-wrap lg:items-center">

                                        <div className="w-full">

                                            <div className="w-full text-white lg:pr-8 pr-5 pl-5">پروژه کنسرت هاب</div>

                                            <div className="w-full mt-7 text-white lg:pr-8 pr-5 pl-5">تولید محتوای ویدیویی:  یه ویدیوی باحال و خلاقانه می‌تونه مثل یه جرقه کسب‌وکار شما رو روشن کنه! ما با ساخت ویدیوهای دو بعدی، سه بعدی و موشن گرافیک، باعث می‌شیم همه محو تماشای ویدیوهای شما بشن!
                                                طراحی تبلیغات چاپی:  کی گفته تبلیغات چاپی قدیمی شده؟ ما با طراحی پوستر، بروشور و کاتالوگ‌های خلاقانه و جذاب، کاری می‌کنیم که همه جا حرف شما باشه!
                                                طراحی بسته‌بندی:  بسته‌بندی محصول شما اولین چیزیه که مشتری می‌بینه! ما یه بسته‌بندی شیک و خاص برات طراحی می‌کنیم که مشتری‌ها رو مثل یه آهنربا به سمت محصول شما بکشونه!
                                                عکاسی و فیلم‌برداری:  ما با عکاسی و فیلم‌برداری حرفه‌ای در زمینه‌های صنعتی، تبلیغاتی، محصولات و مدلینگ، کاری می‌کنیم که همه با دیدن عکس‌ها و فیلم‌ها شما ذوق کنن!
                                                انواع بیلبورد و استرابورد:  بیلبوردهای شما باید تو خیابون خودنمایی کنن! ما بیلبورد و استرابوردهای خلاقانه و جذاب طراحی می‌کنیم که نگاه همه رو به خودشون جذب کنن!
                                            </div>

                                        </div>

                                    </div>

                                    <div className="lg:w-1/2 w-full lg:flex lg:justify-center hidden">
                                        <Image src="/images/proje.png" alt="" width={500} height={500}/>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="w-full bg-[#1E1E25] lg:flex justify-between mt-7 pb-10">

                                    <div className="lg:w-1/2 w-full lg:hidden block">
                                        <Image src="/images/proje.png" alt="" width={321} height={401}/>
                                    </div>

                                    <div className="lg:w-1/2 w-full lg:flex lg:flex-wrap lg:items-center">

                                        <div className="w-full">

                                            <div className="w-full text-white lg:pr-8 pr-5 pl-5">پروژه کنسرت هاب</div>

                                            <div className="w-full mt-7 text-white lg:pr-8 pr-5 pl-5">تولید محتوای ویدیویی:  یه ویدیوی باحال و خلاقانه می‌تونه مثل یه جرقه کسب‌وکار شما رو روشن کنه! ما با ساخت ویدیوهای دو بعدی، سه بعدی و موشن گرافیک، باعث می‌شیم همه محو تماشای ویدیوهای شما بشن!
                                                طراحی تبلیغات چاپی:  کی گفته تبلیغات چاپی قدیمی شده؟ ما با طراحی پوستر، بروشور و کاتالوگ‌های خلاقانه و جذاب، کاری می‌کنیم که همه جا حرف شما باشه!
                                                طراحی بسته‌بندی:  بسته‌بندی محصول شما اولین چیزیه که مشتری می‌بینه! ما یه بسته‌بندی شیک و خاص برات طراحی می‌کنیم که مشتری‌ها رو مثل یه آهنربا به سمت محصول شما بکشونه!
                                                عکاسی و فیلم‌برداری:  ما با عکاسی و فیلم‌برداری حرفه‌ای در زمینه‌های صنعتی، تبلیغاتی، محصولات و مدلینگ، کاری می‌کنیم که همه با دیدن عکس‌ها و فیلم‌ها شما ذوق کنن!
                                                انواع بیلبورد و استرابورد:  بیلبوردهای شما باید تو خیابون خودنمایی کنن! ما بیلبورد و استرابوردهای خلاقانه و جذاب طراحی می‌کنیم که نگاه همه رو به خودشون جذب کنن!
                                            </div>

                                        </div>

                                    </div>

                                    <div className="lg:w-1/2 w-full lg:flex lg:justify-center hidden">
                                        <Image src="/images/proje.png" alt="" width={500} height={500}/>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="w-full bg-[#1E1E25] lg:flex justify-between mt-7 pb-10">

                                    <div className="lg:w-1/2 w-full lg:hidden block">
                                        <Image src="/images/proje.png" alt="" width={321} height={401}/>
                                    </div>

                                    <div className="lg:w-1/2 w-full lg:flex lg:flex-wrap lg:items-center">

                                        <div className="w-full">

                                            <div className="w-full text-white lg:pr-8 pr-5 pl-5">پروژه کنسرت هاب</div>

                                            <div className="w-full mt-7 text-white lg:pr-8 pr-5 pl-5">تولید محتوای ویدیویی:  یه ویدیوی باحال و خلاقانه می‌تونه مثل یه جرقه کسب‌وکار شما رو روشن کنه! ما با ساخت ویدیوهای دو بعدی، سه بعدی و موشن گرافیک، باعث می‌شیم همه محو تماشای ویدیوهای شما بشن!
                                                طراحی تبلیغات چاپی:  کی گفته تبلیغات چاپی قدیمی شده؟ ما با طراحی پوستر، بروشور و کاتالوگ‌های خلاقانه و جذاب، کاری می‌کنیم که همه جا حرف شما باشه!
                                                طراحی بسته‌بندی:  بسته‌بندی محصول شما اولین چیزیه که مشتری می‌بینه! ما یه بسته‌بندی شیک و خاص برات طراحی می‌کنیم که مشتری‌ها رو مثل یه آهنربا به سمت محصول شما بکشونه!
                                                عکاسی و فیلم‌برداری:  ما با عکاسی و فیلم‌برداری حرفه‌ای در زمینه‌های صنعتی، تبلیغاتی، محصولات و مدلینگ، کاری می‌کنیم که همه با دیدن عکس‌ها و فیلم‌ها شما ذوق کنن!
                                                انواع بیلبورد و استرابورد:  بیلبوردهای شما باید تو خیابون خودنمایی کنن! ما بیلبورد و استرابوردهای خلاقانه و جذاب طراحی می‌کنیم که نگاه همه رو به خودشون جذب کنن!
                                            </div>

                                        </div>

                                    </div>

                                    <div className="lg:w-1/2 w-full lg:flex lg:justify-center hidden">
                                        <Image src="/images/proje.png" alt="" width={500} height={500}/>
                                    </div>

                                </div>

                            </SwiperSlide>

                        </Swiper>

                    </div>




                    <div className="w-full bg-[#141416] lg:flex m-auto mt-12 lg:pb-0 pb-5 pr-5 pl-5">

                        <div className="lg:w-1/2 w-full lg:flex lg:items-center">
                            <Image src="/images/proje2.png" alt="" width={510} height={324}/>
                        </div>

                        <div className="lg:w-1/2 w-full lg:flex lg:items-center lg:flex-wrap">

                            <div className="w-full">

                                <div className="w-full m-auto text-white">پروژه کنسرت هاب</div>
                                <div className="w-full m-auto mt-7 text-white">تولید محتوای ویدیویی:  یه ویدیوی باحال و خلاقانه می‌تونه مثل یه جرقه کسب‌وکار شما رو روشن کنه! ما با ساخت ویدیوهای دو بعدی، سه بعدی و موشن گرافیک، باعث می‌شیم همه محو تماشای ویدیوهای شما بشن!
                                    طراحی تبلیغات چاپی:  کی گفته تبلیغات چاپی قدیمی شده؟ ما با طراحی پوستر، بروشور و کاتالوگ‌های خلاقانه و جذاب، کاری می‌کنیم که همه جا حرف شما باشه!
                                    طراحی بسته‌بندی:  بسته‌بندی محصول شما اولین چیزیه که مشتری می‌بینه! ما یه بسته‌بندی شیک و خاص برات طراحی می‌کنیم که مشتری‌ها رو مثل یه آهنربا به سمت محصول شما بکشونه!
                                    عکاسی و فیلم‌برداری:  ما با عکاسی و فیلم‌برداری حرفه‌ای در زمینه‌های صنعتی، تبلیغاتی، محصولات و مدلینگ، کاری می‌کنیم که همه با دیدن عکس‌ها و فیلم‌ها شما ذوق کنن!
                                    انواع بیلبورد و استرابورد:  بیلبوردهای شما باید تو خیابون خودنمایی کنن! ما بیلبورد و استرابوردهای خلاقانه و جذاب طراحی می‌کنیم که نگاه همه رو به خودشون جذب کنن!
                                </div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>

        </>

    )

}


export default Studies;
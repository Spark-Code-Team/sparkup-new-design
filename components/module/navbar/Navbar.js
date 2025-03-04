"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import ArrowDown from "../../../public/icons/ArrowDown";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [openMenu]);

    return (
        <>
            {/* نوبار اصلی */}
            <div className="w-full h-[80px] flex justify-between items-center px-7 border-b border-gray-200 lg:hidden">
                <button onClick={() => setOpenMenu(true)}>
                    <Image src="/images/hamber.png" alt="Menu" width={36} height={24} />
                </button>

                <Link href="#">
                    <Image src="/images/spark.png" alt="Logo" width={99} height={30} />
                </Link>
            </div>

            {/* سایدبار */}
            {openMenu && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    {/* پس‌زمینه تیره برای مودال */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" onClick={() => setOpenMenu(false)}> </div>

                    {/* منو */}
                    <div className="w-[80%] sm:w-[60%] md:w-[40%] h-screen bg-white shadow-2xl absolute right-0 top-0 p-6 transition-transform duration-300 translate-x-0">
                        {/* دکمه بستن */}
                        <div className="w-full flex justify-end">
                            <button onClick={() => setOpenMenu(false)}>
                                <Image src="/images/clear.png" alt="Close" width={24} height={24} />
                            </button>
                        </div>

                        {/* لینک‌های منو */}
                        <div className="flex flex-col items-center mt-8 space-y-6">

                            <a href="/" className="w-full p-3 border-b border-gray-300 text-base rounded-xl" onClick={()=>setOpenMenu(false)}>
                                صفحه اصلی
                            </a>

                            <a href="/services" className="w-full p-3 border-b border-gray-300 text-base rounded-xl" onClick={()=>setOpenMenu(false)}>
                                خدمات
                            </a>

                            <a href="/portfolio" className="w-full p-3 border-b border-gray-300 text-base rounded-xl" onClick={()=>setOpenMenu(false)}>
                                نمونه کارها
                            </a>

                            <a href="#" className="w-full p-3 border-b border-gray-300 text-base rounded-xl" onClick={()=>setOpenMenu(false)}>
                                مقالات و منابع
                            </a>

                            <a href="/about" className="w-full p-3 border-b border-gray-300 text-base rounded-xl" onClick={()=>setOpenMenu(false)}>
                                درباره ما
                            </a>

                            <a href="#" className="w-full p-3 border-b border-gray-300 text-base rounded-xl" onClick={()=>setOpenMenu(false)}>
                                تماس با ما
                            </a>

                            <a href="#" className="w-full p-3 border-b border-gray-300 text-base rounded-xl" onClick={()=>setOpenMenu(false)}>
                                پرسش های متداول
                            </a>

                            {/* دکمه ورود */}
                            <button className="w-full bg-[#C1121F] text-white py-3 rounded-lg font-bold mt-6">
                                ورود / ثبت نام
                            </button>

                        </div>

                    </div>
                </div>
            )}






            {/*  desktop navbar  */}

            <div className=" w-full h-[96px] bg-white lg:flex hidden justify-between items-center pr-10 pl-10 border-b-[1.5px] border-[#DADADA] fixed top-0 z-50">

                <div>
                    <Image src="/images/spark.png" alt="" width={85} height={26}/>
                </div>

                <div className="text-base">
                    <ul className="flex">

                        <li className="p-5">
                            <Link href="/">صفحه اصلی</Link>
                        </li>

                        <li className="p-5">
                            <Link href="/">خدمات</Link>
                        </li>

                        <li className="p-5">
                            <Link href="/">نمونه کارها</Link>
                        </li>

                        <li className="p-5 relative group">
                            <Link href="/" className="flex items-center">
                                مقالات و منابع
                                <ArrowDown/>
                            </Link>

                            <ul className="bg-red-600 absolute w-[150px] h-[200px] mt-5 group-hover:block opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out rounded-lg shadow-lg">
                                <li>
                                    <Link href="#" className="w-full bg-pink-400 mt-5 block">omid 1</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-full bg-pink-400 mt-5 block">omid 1</Link>
                                </li>
                            </ul>

                        </li>

                        <li className="p-5">
                            <Link href="/">درباره ما</Link>
                        </li>

                        <li className="p-5">
                            <Link href="/">تماس با ما</Link>
                        </li>

                        <li className="p-5">
                            <Link href="/">پرسش های متداول</Link>
                        </li>

                    </ul>
                </div>

                <div className="w-[119px] h-[40px] bg-red-500 flex items-center justify-center rounded-md text-white">
                    <Link href="#">ورود/ثبت نام</Link>
                </div>

            </div>


        </>
    );
};

export default Navbar;
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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
            <div className="w-full h-[80px] flex justify-between items-center px-7 border-b border-gray-200">
                <button onClick={() => setOpenMenu(true)}>
                    <Image src="/images/hamber.png" alt="Menu" width={36} height={24} />
                </button>

                <Link href="#">
                    <Image src="/images/spark.png" alt="Logo" width={99} height={30} />
                </Link>
            </div>

            {/* سایدبار */}
            {openMenu && (
                <div className="fixed inset-0 z-50 flex">
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
        </>
    );
};

export default Navbar;
"use client"
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

const Navbar = ()=>{

    const [openMenu , setOpenMenu] = useState(false);

    return(

        <>

            <div className="w-full h-[80px] flex justify-between items-center pr-7 pl-7 border-b-[1.5px] border-b-[#EDEDED]">

                <button onClick={()=>setOpenMenu(true)}>
                    <Image src="/images/hamber.png" alt="" width={36} height={24}/>
                </button>

                <Link href="#">
                    <Image src="/images/spark.png" alt="" width={99} height={30}/>
                </Link>

            </div>


            {
                openMenu &&(

                    <div className="w-[90%] min-h-[700px] pb-10 bg-white shadow-2xl absolute right-0 top-0">

                        <div className="w-full mt-10 flex justify-end pl-5">
                            <button onClick={()=>setOpenMenu(false)}>
                                <Image src="/images/clear.png" alt="" width={24} height={24}/>
                            </button>
                        </div>

                        <div className="w-[90%] m-auto mt-6 p-5 border-b-[1.5px] rounded-b-xl">
                            <Link href="#">صفحه اصلی</Link>
                        </div>

                        <div className="w-[90%] m-auto mt-6 p-5 border-b-[1.5px] rounded-b-xl">
                            <Link href="#">خدمات</Link>
                        </div>

                        <div className="w-[90%] m-auto mt-6 p-5 border-b-[1.5px] rounded-b-xl">
                            <Link href="#">نمونه کارها</Link>
                        </div>

                        <div className="w-[90%] m-auto mt-6 p-5 border-b-[1.5px] rounded-b-xl">
                            <Link href="#">مقالات و منابع</Link>
                        </div>

                        <div className="w-[90%] m-auto mt-6 p-5 border-b-[1.5px] rounded-b-xl">
                            <Link href="#">درباره ما</Link>
                        </div>

                        <div className="w-[90%] m-auto mt-6 p-5 border-b-[1.5px] rounded-b-xl">
                            <Link href="#">تماس با ما</Link>
                        </div>

                        <div className="w-[90%] m-auto mt-6 p-5 border-b-[1.5px] rounded-b-xl">
                            <Link href="#">پرسش های متداول</Link>
                        </div>

                        <div className="w-[90%] bg-[#C1121F] m-auto mt-10 p-3 rounded-2xl text-center font-bold">
                            <button>ورود/ ثبت نام</button>
                        </div>

                    </div>

                )
            }

        </>

    )

}


export default Navbar;
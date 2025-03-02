"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowRight from "../../../public/icons/ArrowRight";
import Image from "next/image";
import TitlePages from "../../module/TitlePages";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: 1,
        image:"/images/Artboard1.png",
        title: "اسپارک‌تک  -  یه شبکه خفن، سریع و امن!",
        services: [
            "طراحی وبسایت",
            "بهینه‌سازی سرعت وبسایت",
            "امنیت وب‌سایت و شبکه‌های اجتماعی",
            "پشتیبانی و نگهداری وبسایت",
            "بهینه‌سازی موتور‌های جست‌وجو",
        ]
    },
    {
        id: 2,
        image:"/images/Artboard2.png",
        title: "اسپارک‌‌استودیو -  خلاقیت در هر پیکسل!",
        services: [
            "تولید محتوای ویدیویی",
            "طراحی تبلیغات چاپی",
            "طراحی بسته‌بندی",
            "عکاسی و فیلم‌برداری" ,
            "انواع بیلبورد و استرابورد"
        ]
    },
    {
        id: 3,
        image:"/images/Artboard3.png",
        title: "اسپارک ادز  -  مشتری‌ها رو هدف می‌گیریم!",
        services: [
            "تبلیغات دیجیتال",
            "شبکه‌های اجتماعی",
            "بازاریابی محتوا" ,
            "همکاری در فروش" ,
            "روابط عمومی"
        ]
    },

    {
        id: 4,
        image:"/images/Artboard4.png",
        title: "اسپارک پلن  -  یه برنامه‌ی خفن برای موفقیت!",
        services: [
            "مشاوره بازاریابی" ,
            "تحلیل و ارزیابی نتایج" ,
            "رویدادها و نمایشگاه‌ها" ,
            "برندسازی" ,
            "معماری کسب‌وکار" ,
            "تحقیقات بازار",
            "طراحی و اجرای کمپین"
        ]
    }
];


export default function StackedCards() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const sections = cardsRef.current;

        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=400%",
                pin: true,
                scrub: 2,
            },
        })
            .to(sections[1], { opacity: 1, y: 0, x: 0, zIndex: 1 }, "step1+=1")
            .to(sections[0], { opacity: 0 }, "step1+=1")
            .to(sections[2], { opacity: 1, y: 0, x: 0, zIndex: 2 }, "step2+=1")
            .to(sections[1], { opacity: 0 }, "step2+=1")
            .to(sections[3], { opacity: 1, y: 0, x: 0, zIndex: 3 }, "step3+=1")
            .to(sections[2], { opacity: 0 }, "step3+=1");

    }, []);

    return (
        <>
            <TitlePages title="خدمات"/>

            <div ref={containerRef} className="relative w-full flex justify-center mb-[500px]">
                {servicesData.map((card, index) => (
                    <div
                        key={card.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="absolute w-[90%] bg-white border-2 border-[#FF8500] shadow-2xl rounded-tr-[150px] rounded-bl-[150px] p-6 flex flex-col items-start text-right text-xl text-gray-800 transition-all duration-500 mt-10"
                        style={{
                            opacity: index === 0 ? 1 : 0,
                            transform: index === 0 ? "translateY(0px)" : "translateY(50px)",
                            zIndex: index === 0 ? 5 : -index,
                        }}
                    >
                        <Image src={card.image} alt="" width={360} height={200}/>
                        <p className="text-[18px] font-bold">{card.title}</p>
                        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside leading-10 text-black">
                            {card.services.map((service, idx) => (
                                <li key={idx}>{service}</li>
                            ))}
                        </ul>
                        <button className="mt-4 text-[#C1121F] font-bold flex items-center gap-1 text-base">
                            <ArrowRight/> مشاهده بیشتر
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowRight from "../../../public/icons/ArrowRight";
import Image from "next/image";
import TitlePages from "../../module/TitlePages";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    { id: 1, title: "اسپارک‌تک - یه شبکه خفن، سریع و امن! (1)"},
    { id: 2, title: "اسپارک‌تک - یه شبکه خفن، سریع و امن! (2)"},
    { id: 3, title: "اسپارک‌تک - یه شبکه خفن، سریع و امن! (3)"},
    { id: 4, title: "اسپارک‌تک - یه شبکه خفن، سریع و امن! (4)"},
    { id: 5, title: "اسپارک‌تک - یه شبکه خفن، سریع و امن! (5)"},
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
            .to(sections[2], { opacity: 0 }, "step3+=1")
            .to(sections[4], { opacity: 1, y: 0, x: 0, zIndex: 4 }, "step4+=1")
            .to(sections[3], { opacity: 0 }, "step4+=1");
    }, []);

    return (

        <>

            <TitlePages title="خدمات"/>

            <div ref={containerRef} className="relative w-full flex justify-center">

                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="absolute w-[90%] h-[484px] bg-white border-2 border-2 border-[#FF8500] shadow-2xl rounded-tr-[150px] rounded-bl-[150px] p-6 flex flex-col items-start justify-end text-right text-xl text-gray-800 transition-all duration-500 mt-10"
                        style={{
                            opacity: index === 0 ? 1 : 0,
                            transform: index === 0 ? "translateY(0px)" : "translateY(50px)",
                            zIndex: index === 0 ? 5 : -index,
                        }}
                    >
                        <p className="text-[18px] font-bold">{card.title}</p>
                        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside leading-10 text-black">
                            <li>طراحی وبسایت</li>
                            <li>بهینه‌سازی سرعت وبسایت</li>
                            <li>امنیت وب‌سایت و شبکه‌های اجتماعی</li>
                            <li>پشتیبانی و نگهداری وبسایت</li>
                            <li>بهینه‌سازی موتور‌های جست‌وجو</li>
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

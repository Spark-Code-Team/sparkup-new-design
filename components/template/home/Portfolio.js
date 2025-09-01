"use client";
import TitlePages from "../../module/TitlePages";
import Image from "next/image";
import CustomButton from "@/components/elements/CustomButton";
import CustomSwiper from "@/components/elements/CustomSwiper";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      image: "/images/art-1.jpg",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
    {
      id: 2,
      image: "/images/art-2.jpg",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
    {
      id: 3,
      image: "/images/frame2.png",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
    {
      id: 4,
      image: "/images/frame1.png",
      title: "طراحی سایت فروشگاهی طلا و جواهرات",
    },
  ];

  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-evenly gap-2"
    >
      <div>
        <TitlePages title="نمونه‌کارها" />
      </div>

      <div className="font-azar font-semibold text-lg">
        <h3>
          <p>یه کم از کارای خفن‌مون</p>
        </h3>
      </div>

      <div className="font-azar font-normal text-lg">
        <h4>
          <p>اینا فقط یه گوشه کوچولو از چیزاییه که با هم ساختیم!</p>
        </h4>
      </div>

      {/* پدینگ طرفین فقط در دسکتاپ */}
      <div className="w-full lg:px-14 mt-10">
        <CustomSwiper>
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center h-full"
            >
              {/* کانتینر تصویر: موبایل مربع، دسکتاپ 4/3 */}
              <div className="w-full relative mb-4 aspect-square lg:aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  // عرض مؤثر هر اسلاید:
                  // موبایل: ~90vw، دسکتاپ: حدود 360px (بسته به breakpoints)
                  sizes="(max-width: 1024px) 90vw, 360px"
                  className="object-cover rounded-lg"
                  // فقط اسلاید اول priority برای پرهیز از فلیکر بالای صفحه
                  priority={idx === 0}
                  // quality پیش‌فرض 75 خوبه؛ اگر خواستی:
                  // quality={80}
                />
              </div>
              <p className="w-full text-center font-medium">{item.title}</p>
            </div>
          ))}
        </CustomSwiper>
      </div>

      <div className="mt-4">
        <CustomButton>پروژه‌های بیشتری ببین</CustomButton>
      </div>
    </div>
  );
};

export default Portfolio;

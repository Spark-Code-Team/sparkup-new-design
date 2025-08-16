"use client";

import CardComponent from "@/components/elements/CardComponents";
import CustomButton from "@/components/elements/CustomButton";
import TitlePages from "@/components/module/TitlePages";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const mainPageServices = [
  {
    id: 1,
    title: "بازاریابی محتوایی",
    description: "محتوای حرفه‌ای و جذاب که مخاطبت همیشه بهش برمی‌گرده!",
    image: "/images/mohtava.svg",
  },
  {
    id: 2,
    title: "بازاریابی شبکه‌های اجتماعی",
    description: "پیجت مثل یه ویترین شیک می‌درخشه، با استراتژی درست و هوشمند!",
    image: "/images/social.svg",
  },
  {
    id: 3,
    title: "SEO (بهینه‌سازی موتور جستجو)",
    description: "به گوگل و مخاطب بفهمون که تو بهترین هستی!",
    image: "/images/seo.svg",
  },
  {
    id: 4,
    title: "تبلیغات آنلاین",
    description: "تبلیغات هدفمند و جذاب که درست به مخاطب هدف می‌رسه!",
    image: "/images/tabligh.svg",
  },
  {
    id: 5,
    title: "برندینگ",
    description: "طراحی هویت برند قوی و به‌یادماندنی که تو ذهن مخاطب حک بشه.",
    image: "/images/branding.svg",
  },
];

const subServices = [
  "طراحی وب‌سایت",
  "طراحی گیفت سازمانی",
  "کمپین تبلیغاتی",
  "برگزاری رویداد و سمینار",
  "تبلیغات گوگل ادز",
  "اینستاگرام مارکتینگ",
  "طراحی لوگو و ریدیزاین",
];

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SparkUp = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = mainPageServices.find((item) => item.id === selectedId);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className={''}>
      {/*   mobile   */}
      <div className="w-full mt-10 font-azar lg:hidden flex flex-col items-center justify-evenly gap-4">
        <div>
          <div className="w-[88%] m-auto flex flex-col items-center justify-evenly gap-4 text-justify">
            <div className="w-full m-auto flex justify-center mt-6">
              <Image
                src="/images/mobile-banner.svg"
                alt=""
                width={400}
                height={400}
                className=""
              />
            </div>
            <div className="w-full font-azar font-bold m-auto text-xl  text-center">
              جایی که ایده‌هات جرقه می‌زنن!
            </div>

            <div className="w-full m-auto text-base mt-6 font-semibold">
              ما تو اسپارک‌آپ، فقط تبلیغات نمی‌کنیم… یه عالمه ایده خفن می‌سازیم
              که کسب‌وکارتو بترکونه! اینجا جاییه که رویاها به واقعیت تبدیل می‌شن
              و رفیق‌هایی پیدا می‌کنی که پایه‌ن تا ته مسیر باهات باشن.
            </div>

            <div className="w-full m-auto mt-6 flex justify-center">
              <button className="w-auto p-4 font-azar font-medium text-lg flex mx-auto justify-center items-center gap-x-5 bg-[#C1121F] rounded-xl text-white mt-4">
                بزن بریم مشاوره رایگان بگیریم!🔥
              </button>
            </div>
          </div>
        </div>

        <div className=" p-4">
          <div className="text-center flex flex-col items-center justify-evenly gap-4">
            <div>
              <TitlePages title={"دربارۀ اسپارک‌آپ"} />
            </div>
            <div>
              <h3 className="font-azar font-medium text-xl">
                ما یه آژانس تبلیغاتی معمولی نیستیم!
              </h3>
            </div>
            <div>
              <p className=" font-azar font-normal text-lg text-justify">
                ما تو اسپارک‌آپ، از همون روز اول تصمیم گرفتیم یه چیز متفاوت
                باشیم. به جای خدمات تکراری، راهکارهای خلاقانه می‌دیم. به جای
                پیچوندن، روراست و بی‌شیله‌پیله‌ کار می‌کنیم.
              </p>
            </div>
            <div>
              <button className="w-auto p-4 flex mx-auto justify-center items-center gap-x-5 bg-[#C1121F] rounded-xl text-white mt-4 font-azar font-medium text-lg">
                اول ببین چیکار کردیم 🤯
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  desktop  */}

      <div className="w-full  lg:flex lg:flex-col lg:gap-x-10 hidden  gap-10">
        <div className="-mx-[calc(55vw-50%)] ">
          <Image
              src="/images/main-banner.png"
              alt=""
              width={2000}
              height={2000}
              sizes="100vw"
              className="w-full h-auto mt-10 block"
              priority
          />
        </div>
        <div className="lg:w-1/2 text-center mx-auto flex flex-wrap justify-center gap-4 items-center">
          <div className="w-full font-azar m-auto text-xl font-extrabold">
            جایی که ایده‌هات جرقه می‌زنن!
          </div>

          <div className="w-full m-auto">
            <p className="mt-5 font-azar font-semibold  text-center">
              ما تو اسپارک‌آپ، فقط تبلیغات نمی‌کنیم… یه عالمه ایده خفن می‌سازیم
              که کسب‌وکارتو بترکونه! اینجا جاییه که رویاها به واقعیت تبدیل می‌شن
              و رفیق‌هایی پیدا می‌کنی که پایه‌ن تا ته مسیر باهات باشن.
            </p>
          </div>

          <CustomButton> بزن بریم مشاوره رایگان بگیریم!</CustomButton>
        </div>

        <div className="">
          <div className="text-center flex flex-col items-center justify-evenly gap-4">
            <div>
              <TitlePages title={"دربارۀ اسپارک‌آپ"} />
            </div>
            <div>
              <h3 className="font-azar font-medium text-xl">
                ما یه آژانس تبلیغاتی معمولی نیستیم!
              </h3>
            </div>
            <div>
              <p className=" font-azar font-normal text-lg text-center">
                ما تو اسپارک‌آپ، از همون روز اول تصمیم گرفتیم یه چیز متفاوت
                باشیم. به جای خدمات تکراری، راهکارهای خلاقانه می‌دیم. به جای
                پیچوندن، روراست و بی‌شیله‌پیله‌ کار می‌کنیم.
              </p>
            </div>
            <div>
              <CustomButton>اول ببین چیکار کردیم </CustomButton>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col items-center justify-evenly gap-4">
            <div>
              <TitlePages title={"خدمات"} />
            </div>
            <div>
              <h3 className="font-azar font-medium text-xl">
                هر چی برای تبلیغات لازمه، داریم… ولی با یه چاشنی اسپارکی!{" "}
              </h3>
            </div>
            <div className="w-full flex flex-wrap justify-center items-start gap-10 p-10">
              {mainPageServices.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={`card-container-${item.id}`}
                  onClick={() => setSelectedId(item.id)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.03 }} // یک افکت هاور کوچک و بدون دردسر
                  transition={{ duration: 0.3 }}
                >
                  <CardComponent
                    title={item.title}
                    image={item.image}
                    width={100}
                    height={100}
                    containerClassName="w-72"
                    titleClassName={'-mt-14'}
                    imageClassName={"p-5 h-52 w-52 self-center"}
                  />
                </motion.div>
              ))}
            </div>

            {/* The Focused Card Overlay */}
            <AnimatePresence>
              {selectedId && (
                <>
                  {/* 1. Backdrop */}
                  <motion.div
                    onClick={() => setSelectedId(null)}
                    className="fixed inset-0 bg-black z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* 2. Focused Card */}
                  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <motion.div
                      layoutId={`card-container-${selectedId}`}
                      className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl"
                    >
                      {/* We are re-creating the card structure here for more control */}
                      <motion.div
                        className="relative p-8"
                        // 3. Staggered Content Animation
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: { transition: { staggerChildren: 0.1 } },
                        }}
                      >
                        <motion.button
                          onClick={() => setSelectedId(null)}
                          className="absolute top-4 right-4 text-gray-500 hover:text-black"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                        >
                          <FaTimes size={24} />
                        </motion.button>

                        <motion.h2
                          variants={contentVariants}
                          className="text-4xl font-bold mb-2 text-gray-800"
                        >
                          {selectedItem.title}
                        </motion.h2>

                        <motion.p
                          variants={contentVariants}
                          className="text-lg text-gray-600 mt-4 mb-6"
                        >
                          {selectedItem.description}{" "}
                          {/* توضیحات کامل‌تر می‌تواند اینجا باشد */}
                        </motion.p>

                        <motion.div variants={contentVariants}>
                          <CustomButton
                            rightIcon={<FaTimes />}
                            className="bg-blue-600"
                          >
                            درخواست مشاوره
                          </CustomButton>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
            <div className=" w-full flex flex-wrap justify-center my-10  gap-10">
              {subServices.map((item) => (
                <CardComponent
                  containerClassName={"w-42 h-42 p-5"}
                  title={item}
                  titleClassName={"font-semibold text-lg"}
                />
              ))}
            </div>
            <div>
              <CustomButton>ببین چطوری می‌تونیم کمکت کنیم!</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparkUp;

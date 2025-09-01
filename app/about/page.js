import Link from "next/link";
import TitlePages from "../../components/module/TitlePages";
import Story from "../../components/template/about/Story";

import CardComponent from "@/components/elements/CardComponents";
import CustomButton from "@/components/elements/CustomButton";
import { FaFire } from "react-icons/fa";

const About = () => {
  const items = [
    {
      id: 1,
      title: "خلاقیت بدون مرز",
      description: "ما عاشق شکستن کلیشه‌هاییم!",
      image: "/images/f1.svg",
    },
    {
      id: 2,
      title: "رفاقت واقعی",
      description: " حرف‌مون حرفِه.",
      image: "/images/f2.svg",
    },
    {
      id: 3,
      title: "تجربه + تخصص",
      description: "از مشاوره تا اجرا، یه تیم فول‌پکیج داریم.",
      image: "/images/f3.svg",
    },
    {
      id: 4,
      title: "ایده‌های ناب",
      description: "می‌خوای خاص باشی؟ ما راهشو بلدیم.",
      image: "/images/f4.svg",
    },
    {
      id: 5,
      title: " لحن خودمونی",
      description: "باهات راحت حرف می‌زنیم، بدون ادا اصول.",
      image: "/images/f5.svg",
    },
  ];

  return (
    <div className="flex flex-col  items-center justify-evenly gap-10">
      <div className="lg:mt-36">
        <TitlePages
          title="ما یه تیمیم… ولی نه یه تیم معمولی!
"
          className={"text-base md:text-lg"}
        />
      </div>

      <Story />
      <div className="w-full  flex flex-wrap items-center justify-evenly gap-10 ">
        {items.map((item) => (
          <CardComponent
            title={item.title}
            description={item.description}
            image={item.image}
            width={100}
            height={100}
            containerClassName="w-72 flex flex-col items-center text-center" // اندازه ثابت برای کارت‌های گرید
            imageClassName={"p-5 h-32 w-32 self-center"}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <h4 className="font-azar  font-normal text-lg mt-4  text-justify p-4 md:p-0">
          دوست داری ما هم بخشی از داستان برندت باشیم؟
        </h4>

        <Link href={"/#reserve"}>
          <CustomButton rightIcon={<FaFire />}>شروع همکاری</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default About;

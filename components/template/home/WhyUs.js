import CardComponent from "@/components/elements/CardComponents";
import TitlePages from "@/components/module/TitlePages";

export default function WhyUs() {
  const mainPageServices = [
    {
      id: 1,
      title: "راهکار مخصوص خودت، نه نسخه آماده!",

      image: "/images/j1.png",
    },
    {
      id: 2,
      title: "رفاقت واقعی تا ته مسیر!",

      image: "/images/j2.png",
    },
    {
      id: 3,
      title: "تیم خلاق با کلی تجربه",

      image: "/images/j3.png",
    },
    {
      id: 4,
      title: "تخصص دیجیتال + هوش سنتی تبلیغات",

      image: "/images/j4.png",
    },
    {
      id: 5,
      title: "به صرفه، نتیجه‌محور، بی‌واسطه!",

      image: "/images/j5.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-evenly gap-10">
      <div>
        <TitlePages title={"چرا ما؟"} />
      </div>
      <div className="flex w-full justify-center flex-wrap items-center gap-10">
        {mainPageServices.map((item) => (
          <CardComponent
            containerClassName={"flex flex-col items-center m-6 text-center"}
            width={200}
            height={200}
            imageClassName={"w-32 h-32"}
            key={item.id}
            title={item.title}
            image={item.image}

          />
        ))}
      </div>
    </div>
  );
}

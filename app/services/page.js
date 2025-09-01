import TitlePages from "../../components/module/TitlePages";
import OnlineAdvertising from "../../components/template/services/OnlineAdvertising";
import OfflineAdvertising from "../../components/template/services/OfflineAdvertising";
import SampleProje from "../../components/template/services/SampleProje";
import AdvertisingStrategy from "../../components/template/services/AdvertisingStrategy";
import AdvertisingAcademy from "../../components/template/services/AdvertisingAcademy";
import ServicesIntro from "@/components/module/services/ServicesIntro";
import ServicesReview from "@/components/module/services/ServicesReview";
import { services } from "@/components/constants/services";
import Link from "next/link";
import CardComponent from "@/components/elements/CardComponents";
import CustomButton from "@/components/elements/CustomButton";

const Services = () => {
  return (
    <>
      <div className="lg:mt-36">
        <TitlePages title="خدمات اسپارک" />
      </div>

      <div className="flex font-azar flex-col items-center justify-evenly mx-auto px-4 py-12 md:py-20">
        <div className="text-center ">
          <h1 className="text-3xl md:text-4xl font-bold">
            خدمات در یک نگاه | اسپارک‌آپ
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            🚀 هر چیزی که برای رشد برندت لازم داری! توی اسپارک‌آپ همه خدمات
            تبلیغات و بازاریابی رو یکجا جمع کردیم.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <CardComponent
                image={service.icon}
                width={200}
                imageClassName={"w-24 h-24"}
                height={200}
                title={service.title}
                description={service.shortDescription}
                containerClassName={
                  "font-azar w-64 h-80 m-4 flex flex-col items-center justify-center  text-center py-10"
                }
              />
            </Link>
          ))}
        </div>

        <div className="w-full text-center mt-16 flex flex-col items-center justify-evenly gap-10">
          <div>
            <h2 className="text-2xl font-bold">هنوز سؤال داری؟</h2>
            <p className="text-gray-600 mt-2">
              ما همیشه اینجاییم تا راحت تصمیم بگیری!
            </p>
          </div>
          
            <CustomButton>
              <a href="tel:02126612786">
                ما همیشه اینجاییم تا راحت تصمیم بگیری!
              </a>
            </CustomButton>
          
        </div>
      </div>
    </>
  );
};

export default Services;

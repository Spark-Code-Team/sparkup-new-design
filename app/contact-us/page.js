import CustomButton from "@/components/elements/CustomButton";
import FeatureCard from "@/components/elements/FeaturCard";
import TitlePages from "@/components/module/TitlePages";
import ContactUsForm from "@/components/template/contact-us/ContactUsForm";
import ContactWaysCard from "@/components/template/contact-us/ContactWaysCard";
import ReservationContactUsForm from "@/components/template/contact-us/ReserverationConatctUsForm";
import { FaFire } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <div className="flex flex-col h-auto w-auto items-center justify-evenly gap-10 lg:mt-24 text-black">
        <div>
          <TitlePages
            title={"یه سوال داری؟ یه ایده داری؟ بیا گپ بزنیم!"}
            className={"font-bold md:font-bold md:text-lg text-sm"}
          />
          <h4 className="font-azar font-normal text-lg mt-4  text-justify p-4 md:p-0">
            ما همیشه پایه‌ایم برای یه مکالمه‌ی خودمونی، یه مشاوره‌ی خفن، یا حتی
            فقط یه گپ دوستانه! فرم زیر رو پر کن، یا مستقیم زنگ بزن/پیام بده. قول
            می‌دیم زود برگردیم سراغت :)
          </h4>
        </div>
        <ContactUsForm />
        <div>
          <TitlePages title={"راه‌های دیگه هم هست…"} />
          <div className="mt-10">
            <ContactWaysCard />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <TitlePages title={"عجله داری؟"} />
          <h4 className="font-azar font-normal text-lg text-center">
            یه دکمه سریع برای مشاوره فوری داریم، بزن بریم حرف بزنیم!
          </h4>
          <CustomButton rightIcon={<FaFire />}>مشاوره رایگان</CustomButton>
        </div>
        <div className="w-full flex flex-col items-center">
          <ReservationContactUsForm />
        </div>
      </div>
    </>
  );
}

import TitlePages from "../../components/module/TitlePages";
import OnlineAdvertising from "../../components/template/services/OnlineAdvertising";
import OfflineAdvertising from "../../components/template/services/OfflineAdvertising";
import SampleProje from "../../components/template/services/SampleProje";
import AdvertisingStrategy from "../../components/template/services/AdvertisingStrategy";
import AdvertisingAcademy from "../../components/template/services/AdvertisingAcademy";
import ServicesIntro from "@/components/module/services/ServicesIntro";
import ServicesReview from "@/components/module/services/ServicesReview";

const Services = () => {
  return (
    <>
      <div className="lg:mt-36">
        <TitlePages title="خدمات اسپارک" />
      </div>

      <OnlineAdvertising />
      <div className={"mt-10"}>
        <ServicesIntro />
      </div>
      <div>
        <ServicesReview />
      </div>
      <SampleProje />
      {/* <OfflineAdvertising/>
            <AdvertisingStrategy/>
            <AdvertisingAcademy/> */}
    </>
  );
};

export default Services;

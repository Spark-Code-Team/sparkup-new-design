import TitlePages from "../../components/module/TitlePages";
import OnlineAdvertising from "../../components/template/services/OnlineAdvertising";
import WorkProcessTemplate from "../../components/template/services/WorkProcessTemplate";
import OnlineAdvertisingProject from "../../components/template/services/OnlineAdvertisingProject";
import OfflineAdvertising from "../../components/template/services/OfflineAdvertising";
import OfflineAdvertisingProject from "../../components/template/services/OfflineAdvertisingProject";
import AdvertisingSterategy from "../../components/template/services/AdvertisingSterategy";
import Portfolio from "../../components/template/services/Portfolio";
import AdvertisingAcademy from "../../components/template/services/AdvertisingAcademy";
import Courses from "../../components/template/services/Courses";

const Services = ()=>{

    return(

        <>

            <TitlePages title="خدمات اسپارک"/>

            <OnlineAdvertising/>
            <WorkProcessTemplate/>
            <OnlineAdvertisingProject/>
            <OfflineAdvertising/>
            <WorkProcessTemplate/>
            <OfflineAdvertisingProject/>
            <AdvertisingSterategy/>
            <Portfolio/>
            <AdvertisingAcademy/>
            <Courses/>


        </>

    )

}


export default Services;
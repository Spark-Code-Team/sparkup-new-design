import TitlePages from "../../components/module/TitlePages";
import OnlineAdvertising from "../../components/template/services/OnlineAdvertising";
import OfflineAdvertising from "../../components/template/services/OfflineAdvertising";
import SampleProje from "../../components/template/services/SampleProje";
import AdvertisingStrategy from "../../components/template/services/AdvertisingStrategy";
import AdvertisingAcademy from "../../components/template/services/AdvertisingAcademy";

const Services = ()=>{

    return(

        <>

            <div className="lg:mt-36">
                <TitlePages title="خدمات اسپارک"/>
            </div>

            <OnlineAdvertising/>
            <SampleProje/>
            <OfflineAdvertising/>
            <AdvertisingStrategy/>
            <AdvertisingAcademy/>


        </>

    )

}


export default Services;
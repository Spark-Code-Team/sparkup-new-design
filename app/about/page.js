import TitlePages from "../../components/module/TitlePages";
import Story from "../../components/template/about/Story";
import Mission from "../../components/template/about/Mission";
import Cultures from "../../components/template/about/Cultures";
import Awards from "../../components/template/about/Awards";
import Team from "../../components/template/about/Team";
import GettingStarted from "../../components/template/about/GettingStarted";

const About = ()=>{

    return(

        <>

            <TitlePages title="درباره اسپارک آپ"/>

            <Story/>
            <GettingStarted/>
            <Mission/>
            <Team/>
            <Cultures/>
            <Awards/>

        </>

    )

}


export default About;
import TitlePages from "../../components/module/TitlePages";
import Gallery from "../../components/template/portfolio/Gallery";
import Studies from "../../components/template/portfolio/Studies";

const Portfolio = ()=>{

    return(

        <>

            <div className="lg:mt-36">
                <TitlePages title="نمونه کارها"/>
            </div>

            <Gallery/>
            <Studies/>

        </>

    )

}


export default Portfolio;
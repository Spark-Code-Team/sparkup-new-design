import TitlePages from "../../components/module/TitlePages";
import SpecializedArticles from "../../components/template/articles/SpecializedArticles";
import EducationalArticles from "../../components/template/articles/EducationalArticles";

const Articles = ()=>{

    return(

        <>

            <div className="lg:mt-36">
                <TitlePages title="بلاگ"/>
            </div>

            <SpecializedArticles/>
            <EducationalArticles/>

        </>

    )

}


export default Articles;
import SparkUp from "../components/template/home/SparkUp";
import Services from "../components/template/home/Services";
import Portfolio from "../components/template/home/Portfolio";
import CustomerReviews from "../components/template/home/CustomerReviews";

const Home = ()=>{

  return(

      <>

          <SparkUp/>
          {/*<Services/>*/}
          <Portfolio/>
          <CustomerReviews/>

      </>

  )

}


export default Home;
import Image from "next/image";

const TitlePages = ({title})=>{

    return(

        <>

            <div className="w-full lg:hidden text-center flex justify-center gap-x-5 text-[20px] flex-wrap items-center mt-14 font-bold">

                <Image src="/images/bg1.png" alt="" width={42} height={12}/>
                {title}
                <Image src="/images/bg2.png" alt="" width={42} height={12}/>

            </div>

        </>

    )

}


export default TitlePages;
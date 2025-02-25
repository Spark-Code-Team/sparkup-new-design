import Image from "next/image";
import React from "react";

const WorkProcess = ()=>{

    return(

        <>

            <div className="w-full">

                <div className="w-[90%] m-auto">

                    <div className="w-full m-auto mt-12 font-bold text-[18px]">فرایند کار</div>

                    <div className="w-full m-auto mt-6">
                        <Image src="/images/car.png" alt="" width={392} height={789}/>
                    </div>

                </div>

            </div>

        </>

    )

}


export default WorkProcess;
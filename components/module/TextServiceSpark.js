import React from "react";

const TextServiceSpark = ({title , description})=>{

    return(

        <>

            <div className="w-full">

                <div className="w-[90%] m-auto mt-10">

                    <div className="w-full m-auto">

                        <ul className="list-disc list-inside font-bold text-[18px]">
                            <li>{title}</li>
                        </ul>

                        <div className="w-full m-auto mt-4">{description}</div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default TextServiceSpark;
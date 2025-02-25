import Image from "next/image";

const SparkUp = ()=>{


    return(

        <>

            <div className="w-full mt-10">

                <div className="w-[88%] m-auto">

                    <div className="w-full m-auto text-xl font-bold">اسپارک‌آپ، تولد یک جرقه!</div>

                    <div className="w-full m-auto flex justify-center mt-6">
                        <Image src="/images/spark-up.png" alt="" width={392} height={310}/>
                    </div>

                    <div className="w-full m-auto text-base mt-6">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته. ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</div>

                    <div className="w-full m-auto mt-6 flex justify-center">
                        <button className="w-full p-2 flex justify-center items-center gap-x-5 bg-[#C1121F] rounded-xl text-white">
                            <Image src="/images/vector.png" alt="" width={8} height={15}/>
                            بیشتر باما آشنا شو!
                            <Image src="/images/vector.png" alt="" width={8} height={15}/>
                        </button>
                    </div>

                </div>

            </div>

        </>

    )

}


export default SparkUp
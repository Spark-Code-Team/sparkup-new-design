import Image from "next/image";

const GettingStarted = ()=>{

    return(

        <>

            <div className="w-full mt-10 lg:pr-14 lg:pl-14 pr-0 pl-0">

                <div className="lg:w-full w-[90%] m-auto">

                    <div className="w-full m-auto text-[18px] font-bold">از کجا شروع شد ؟</div>

                    <div className="w-full mt-8 lg:block flex gap-x-2">

                        <div className="lg:w-full w-[20%] lg:order-1 lg:flex justify-center items-center hidden">
                            <Image src="/images/car-mobile.png" alt="" width={504} height={49}/>
                        </div>

                        <div className="lg:w-full w-[80%] lg:flex lg:gap-x-10 lg:order-2 lg:mt-7 mt-0 rounded-2xl">

                            <div className="lg:w-1/3 lg:min-h-[204px] w-full m-auto text-[15px] pr-3 pl-3 pt-5 pb-5 leading-8 lg:mt-0 border-[1.5px] border-[#DADADA] rounded-xl">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته. ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</div>
                            <div className="lg:w-1/3 lg:min-h-[204px] w-full m-auto text-[15px] pr-3 pl-3 pt-5 pb-5 leading-8 lg:mt-0 mt-3 border-[1.5px] border-[#DADADA] rounded-xl">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته. ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</div>
                            <div className="lg:w-1/3 lg:min-h-[204px] w-full m-auto text-[15px] pr-3 pl-3 pt-5 pb-5 leading-8 lg:mt-0 mt-3 border-[1.5px] border-[#DADADA] rounded-xl">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته. ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</div>

                        </div>

                        <div className="lg:w-full w-[20%] lg:order-1 flex items-center lg:hidden">
                            <Image src="/images/frame22.png" alt="" width={49} height={504}/>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default GettingStarted;
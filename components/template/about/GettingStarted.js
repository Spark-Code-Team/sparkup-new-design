import Image from "next/image";

const GettingStarted = ()=>{

    return(

        <>

            <div className="w-full mt-10">

                <div className="w-[90%] m-auto">

                    <div className="w-full m-auto text-[18px] font-bold">از کجا شروع شد ؟</div>

                    <div className="w-full mt-8 flex gap-x-2">

                        <div className="w-[80%] rounded-2xl">

                            <div className="w-full m-auto text-[15px] pr-3 pl-3 pt-5 pb-5 leading-8 border-[1.5px] border-[#DADADA] rounded-xl">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته. ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</div>
                            <div className="w-full m-auto text-[15px] pr-3 pl-3 pt-5 pb-5 leading-8 mt-3 border-[1.5px] border-[#DADADA] rounded-xl">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته. ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</div>
                            <div className="w-full m-auto text-[15px] pr-3 pl-3 pt-5 pb-5 leading-8 mt-3 border-[1.5px] border-[#DADADA] rounded-xl">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته. ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</div>

                        </div>

                        <div className="w-[20%] flex items-center">
                            <Image src="/images/frame22.png" alt="" width={49} height={504}/>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default GettingStarted;
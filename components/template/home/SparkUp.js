import Image from "next/image";

const SparkUp = ()=>{


    return(

        <>

            {/*   mobile   */}
            <div className="w-full mt-10 lg:hidden block">

                <div className="w-[88%] m-auto">

                    <div className="w-full m-auto text-xl font-bold">اسپارک‌آپ، تولد یک جرقه!</div>

                    <div className="w-full m-auto flex justify-center mt-6">
                        <Image src="/images/banner-03.jpg" alt="" width={392} height={310}/>
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



            {/*  desktop  */}

            <div className="w-full mt-36 lg:flex lg:gap-x-10 hidden pr-14 pl-14">

                <div className="lg:w-1/2 m-auto flex flex-wrap justify-start items-center">

                    <div className="w-full m-auto text-[18px] font-bold">اسپارک‌آپ، تولد یک جرقه!</div>

                    <div className="w-full m-auto">
                        <p className="mt-5">ما اسپارک‌آپ هستیم، یه جای پر از آدمای خلاق و باحال که ایده‌هاشون مثل فشفشه می‌ترکه! اینجا، تو دل شهر شلوغ، یه دفتر کوچیک داریم که توش کلی اتفاقای هیجان‌انگیز می‌افته.</p>
                        <p className="mt-5">ما یه خانواده‌ایم که با هم می‌سوزیم و می‌درخشیم، خلاقیتمون مثل آتیش شعله‌ور می‌شه و کارای باحال انجام می‌دیم.</p>
                        <p className="mt-5">اسپارک‌آپ یه حس نابِ، حس اینکه می‌تونی دنیا رو تغییر بدی و هر چیزی رو به یه چیز هیجان‌انگیز تبدیل کنی. اینجا،  خاطره‌های خوب می‌سازی و چیزایی رو خلق می‌کنی که هیچ جای دیگه پیدا نمی‌شه. پس اگه دنبال یه جرقه برای روشن کردن دنیات هستی، به جمع ما بپیوند!</p>
                    </div>

                    <button className="w-[210px] p-2 flex justify-center items-center gap-x-5 bg-[#C1121F] rounded-xl text-white mt-4">
                        <Image src="/images/vector.png" alt="" width={8} height={15}/>
                        بیشتر باما آشنا شو!
                        <Image src="/images/vector.png" alt="" width={8} height={15}/>
                    </button>

                </div>

                <div className="lg:w-1/2 m-auto flex justify-center items-center">

                    <Image src="/images/banner-03.jpg" alt="" width={392} height={310}/>

                </div>

            </div>

        </>

    )

}


export default SparkUp
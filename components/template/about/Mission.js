import Image from "next/image";

const Mission = ()=>{

    return(

        <>

            <div className="w-full mt-16">

                <div className="w-[90%] m-auto">

                    <div className="w-full m-auto text-[18px] font-bold">ماموریت ها و چشم اندازها</div>


                    <div className="w-full m-auto lg:flex block">

                        <div className="lg:w-1/2 w-full mt-7 flex">

                            <div className="w-[22%] flex justify-end items-center">
                                <Image src="/images/m1.png" alt="" width={72} height={72}/>
                            </div>

                            <div className="w-[85%] text-[15px] pr-5 pl-5">
                                <p className="font-bold">چشم انداز اسپارک آپ</p>
                                <p className="mt-4">یه جرقه کافی بود تا اسپارک‌آپ متولد بشه!   اسپارک‌آپ از دل یه ایده‌ی ناب و خفن بیرون اومد تا دنیای تبلیغات رو تکون بده و به کسب‌وکارها کمک کنه تا حسابی بدرخشن.  ما یه تیم جوون و پرانرژی هستیم که عاشق چالش‌های جدیدیم و با کلی ایده‌های خلاقانه، می‌خوایم کسب‌وکارتون رو متحول کنیم.   حالا که با اسپارک‌آپ آشنا شدین، بیاین یه نگاهی به خدمات‌مون بندازیم:</p>
                            </div>

                        </div>

                        <div className="lg:w-1/2 w-full mt-7 flex">

                            <div className="w-[22%] flex justify-end items-center">
                                <Image src="/images/m2.png" alt="" width={72} height={72}/>
                            </div>

                            <div className="w-[85%] text-[15px] pr-5 pl-5">
                                <p className="font-bold">ماموریت اسپارک آپ</p>
                                <p className="mt-4">یه جرقه کافی بود تا اسپارک‌آپ متولد بشه!   اسپارک‌آپ از دل یه ایده‌ی ناب و خفن بیرون اومد تا دنیای تبلیغات رو تکون بده و به کسب‌وکارها کمک کنه تا حسابی بدرخشن.  ما یه تیم جوون و پرانرژی هستیم که عاشق چالش‌های جدیدیم و با کلی ایده‌های خلاقانه، می‌خوایم کسب‌وکارتون رو متحول کنیم.   حالا که با اسپارک‌آپ آشنا شدین، بیاین یه نگاهی به خدمات‌مون بندازیم: </p>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </>

    )

}


export default Mission;
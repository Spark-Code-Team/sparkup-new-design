import Image from "next/image";
import Link from "next/link";

const Footer = ()=>{

    return(

        <>

            <div className="w-full bg-red-600 mt-10 pt-5 pb-5 pr-5 pl-5">

                <div className="w-full bg-blue-600 flex justify-end m-auto">
                    <Image src="/images/spark.png" alt="" width={99} height={30}/>
                </div>

                <div className="w-full bg-violet-400 m-auto mt-6 text-[14px]">
                    <p>می‌دونیم هر کسب‌وکاری داستان و چالش‌های خودشو داره. واسه همین به جای اینکه فقط یه سری خدمات تبلیغاتی بهتون بدیم، می‌شینیم کنارتون، با هم گپ می‌زنیم و از نیازهاتون می‌گین. بعدش با یه عالمه ایده خلاقانه، راهکارهایی رو براتون می‌چینیم که مخصوص خودتون باشه</p>
                </div>

                <div className="w-full bg-orange-300 m-auto mt-6 text-[14px] flex gap-x-3">

                    <div className="w-1/3 bg-blue-300 flex flex-wrap gap-y-4">
                        <Link href="#" className="w-full">صفحه اصلی</Link>
                        <Link href="#" className="w-full">خدمات</Link>
                        <Link href="#" className="w-full">نمونه کارها</Link>
                    </div>

                    <div className="w-1/3 bg-blue-300 flex flex-wrap gap-y-4">
                        <Link href="#" className="w-full">مقالات و منابع</Link>
                        <Link href="#" className="w-full">درباره ما</Link>
                        <Link href="#" className="w-full">تماس با ما</Link>
                    </div>

                    <div className="w-1/3 bg-blue-300 flex flex-wrap gap-y-4">
                        <Link href="#" className="w-full">پرسش های متداول</Link>
                    </div>

                </div>


                <div className="w-full bg-lime-600 m-auto mt-10">

                    <div className="w-full bg-green-800 m-auto">تلفن پشتیبانی : ۰۲۱۷۰۷۰۹۷۹۷</div>

                    <div className="w-full bg-green-800 m-auto mt-7">آدرس ایمیل : tripjet@gmail.com</div>

                    <div className="w-full bg-green-800 m-auto mt-7 flex gap-x-5">

                        <Image src="/images/linkedin.png" alt="" width={22} height={22}/>
                        <Image src="/images/x.png" alt="" width={22} height={22}/>
                        <Image src="/images/instagram.png" alt="" width={22} height={22}/>

                        <p>بهمون سر بزن!</p>

                    </div>

                </div>



                <div className="w-full bg-lime-500 m-auto mt-10 flex justify-center">

                    <Image src="/images/map.png" alt="" width={392} height={167}/>

                </div>


            </div>

        </>

    )

}


export default Footer;
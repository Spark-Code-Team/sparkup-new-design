import Image from "next/image";

const CardCustomerReview = ()=>{

    return(

        <>

            <div className="w-[90%] bg-blue-500 m-auto pt-6 pb-6 pr-4 pl-4 rounded-3xl">

                <div className="w-full bg-green-400 flex gap-x-4">

                    <div className="flex items-center">
                        <Image src="/images/customer.png" alt="" width={56} height={56}/>
                    </div>

                    <div>
                        <p className="w-full bg-red-500 font-bold">مجموعه بی بی تالکین</p>
                        <p className="w-full bg-pink-300 mt-3">دکتر بهزادی مقدم</p>
                    </div>

                </div>

                <div className="w-full bg-violet-400 flex justify-end mt-5">
                    <Image src="/images/star.png" alt="" width={20} height={20}/>
                    <Image src="/images/star.png" alt="" width={20} height={20}/>
                    <Image src="/images/star.png" alt="" width={20} height={20}/>
                    <Image src="/images/star.png" alt="" width={20} height={20}/>
                    <Image src="/images/star.png" alt="" width={20} height={20}/>
                </div>

                <div className="w-full bg-violet-600 mt-5 text-[14px]">
                    <p>همکاری با بچه های جوان اسپارک کد، یکی از تجربه‌های خیلی خوب ما تو این سال ها بود. تخصص، دقت و کیفیت بالا از ویژگی‌های خوب این تیم است که سبب ادامه همکاری ما با این دوستان شد.</p>
                </div>

            </div>

        </>

    )

}


export default CardCustomerReview;
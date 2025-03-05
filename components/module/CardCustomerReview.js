import Image from "next/image";

const CardCustomerReview = ()=>{

    return(

        <>

            <div className="w-full m-auto">

                <div className="lg:w-[360px] lg:h-[280px] w-[93%] m-auto border-[1.5px] border-[#DADADA] pt-1 pb-4 flex flex-wrap rounded-2xl">

                    <div className="w-full m-auto mt-5 flex items-center pr-4 pl-4">
                        <div className="lg:w-[56px] lg:h-[56px] w-[56px] h-[56px] rounded-full flex items-center">
                            <Image src="/images/customer.png" alt="" width={56} height={56}/>
                        </div>
                        <div className="w-[330px] m-auto">
                            <p className="w-full m-auto text-[18px] pr-4">مجموعه بی بی تالکین</p>
                            <p className="w-full m-auto mt-3 text-base pr-4">آقای عرب زاده</p>
                        </div>

                    </div>


                    <div className="w-full m-auto lg:mt-3 mt-5 flex justify-end pl-4">
                        <Image src="/images/star.png" alt="" width={16} height={16}/>
                        <Image src="/images/star.png" alt="" width={16} height={16}/>
                        <Image src="/images/star.png" alt="" width={16} height={16}/>
                        <Image src="/images/star.png" alt="" width={16} height={16}/>
                        <Image src="/images/star.png" alt="" width={16} height={16}/>
                    </div>

                    <div className="w-full m-auto lg:mt-3 mt-5 text-sm pr-4 pl-4">همکاری با بچه های جوان اسپارک کد، یکی از تجربه‌های خیلی خوب ما تو این سال ها بود. تخصص، دقت و کیفیت بالا از ویژگی‌های خوب این تیم است که سبب ادامه همکاری ما با این دوستان شد.</div>


                </div>

            </div>

        </>

    )

}


export default CardCustomerReview;
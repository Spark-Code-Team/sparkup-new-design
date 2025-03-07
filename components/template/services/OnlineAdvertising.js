import Image from "next/image";

const OnlineAdvertising = ()=>{

    return(

        <>

            <div className="w-full m-auto mt-12 lg:pr-14 lg:pl-14 pr-5 pl-5">

                <div className="w-full m-auto">

                    <ul className="list-disc list-inside">
                        <li>تبلیغات آنلاین</li>
                    </ul>

                    <div className="w-full m-auto mt-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>

                </div>

                <div className="w-full m-auto mt-8">

                    <p className="w-full m-auto">فرایند کار</p>

                    <div className="w-full m-auto flex justify-center">
                        <Image src="/images/service-chart.png" alt="" width={1048} height={300} className="lg:block hidden"/>
                        <Image src="/images/char.png" alt="" width={392} height={600} className="lg:hidden block mt-4"/>
                    </div>

                </div>

            </div>

        </>

    )

}


export default OnlineAdvertising;
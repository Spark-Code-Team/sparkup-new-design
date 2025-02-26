import Image from "next/image";

const Mission = ()=>{

    return(

        <>

            <div className="w-full mt-10">

                <div className="w-[90%] m-auto">

                    <div className="w-full m-auto text-[18px] font-bold">ماموریت ها و چشم اندازها</div>

                    <div className="w-full mt-7 flex">

                        <div className="w-[22%] flex items-center">
                            <Image src="/images/m1.png" alt="" width={72} height={72}/>
                        </div>

                        <div className="w-[85%] text-[15px] pr-5 pl-5">
                            <p className="font-bold">چشم انداز اسپارک آپ</p>
                            <p className="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                        </div>

                    </div>



                    <div className="w-full mt-7 flex">

                        <div className="w-[22%] flex items-center">
                            <Image src="/images/m2.png" alt="" width={72} height={72}/>
                        </div>

                        <div className="w-[85%] text-[15px] pr-5 pl-5">
                            <p className="font-bold">ماموریت اسپارک آپ</p>
                            <p className="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                        </div>

                    </div>


                </div>

            </div>

        </>

    )

}


export default Mission;
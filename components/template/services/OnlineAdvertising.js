import CustomButton from "@/components/elements/CustomButton";

const OnlineAdvertising = () => {

    return (

        <>

            <div
                className={"flex flex-col text-justify px-5 lg:px-0 items-center justify-evenly gap-5 font-normal mt-5"}>
                <div id={"first-serv"} className={'flex flex-col items-center justify-evenly gap-5'}>
                    <div>
                        <h2>
                            <p className={'font-bold'}>
                                هر چیزی که برای رشد برندت لازم داری!

                            </p>
                        </h2>
                    </div>
                    <div>
                        <p>
                            توی اسپارک‌آپ همه خدمات تبلیغات و بازاریابی رو یکجا جمع کردیم؛ از طراحی خاص و خلاقانه گرفته
                            تا سئو، تولید محتوا و تبلیغات محیطی. با خیال راحت برندت رو به ما بسپار!

                        </p>
                    </div>
                    <div>
                        <CustomButton variant={'contained'} text={' مشاوره رایگان بگیر 📞 '} color={'white'}
                                      size={'sm'}/>

                    </div>
                </div>
            </div>
        </>

    )

}


export default OnlineAdvertising;
import Image from "next/image";

const CardCustomerReview = () => {
  return (
    <>
      <div className="lg:h-[200px] lg:w-[400px] w-[300px] border-[1.5px] border-[#DADADA] pt-1 pb-4 flex flex-wrap rounded-2xl">
        <div className="w-full m-auto mt-5 flex items-center pr-4 pl-4">
          <div className="lg:w-[56px] lg:h-[56px] w-[56px] h-[56px] rounded-full flex items-center">
            <Image src="/images/customer.png" alt="" width={56} height={56} />
          </div>
          <div className="w-[330px] m-auto">
            <p className="w-full m-auto text-[18px] pr-4 font-bold">
              مجموعه بی بی تالکین
            </p>
            <div className=" w-full text-base pr-4 font-azar flex flex-row justify-between items-center">
              <div>
                <p className="font-semibold text-[13px]">آقای عرب زاده</p>
              </div>
              <div className="lg:mt-2 lg:mr-3 mt-5 flex">
                <Image
                  src="/images/star.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
                <Image
                  src="/images/star.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
                <Image
                  src="/images/star.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
                <Image
                  src="/images/star.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
                <Image
                  src="/images/star.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 font-bold text-[10px] text-justify">
          همکاری با بچه های جوان اسپارک کد، یکی از تجربه‌های خیلی خوب ما تو این
          سال ها بود. تخصص، دقت و کیفیت بالا از ویژگی‌های خوب این تیم است که سبب
          ادامه همکاری ما با این دوستان شد.
        </div>
      </div>
    </>
  );
};

export default CardCustomerReview;

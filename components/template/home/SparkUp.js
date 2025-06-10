import Image from "next/image";

const SparkUp = () => {
  return (
    <>
      {/*   mobile   */}
      <div className="w-full mt-10 lg:hidden block">
        <div className="w-[88%] m-auto flex flex-col items-center justify-evenly gap-4 text-justify">
          <div className="w-full m-auto flex justify-center mt-6">
            <Image
              src="/images/banner-03.jpg"
              alt=""
              width={392}
              height={310}

            />
          </div>
          <div className="w-full m-auto text-xl font-bold text-center">
            جایی که ایده‌هات جرقه می‌زنن!
          </div>

          <div className="w-full m-auto text-base mt-6 font-semibold">
            ما تو اسپارک‌آپ، فقط تبلیغات نمی‌کنیم… یه عالمه ایده خفن می‌سازیم که
            کسب‌وکارتو بترکونه! اینجا جاییه که رویاها به واقعیت تبدیل می‌شن و
            رفیق‌هایی پیدا می‌کنی که پایه‌ن تا ته مسیر باهات باشن.
          </div>

          <div className="w-full m-auto mt-6 flex justify-center">
            <button className="w-full p-2 flex justify-center items-center gap-x-5 bg-[#C1121F] rounded-xl text-white">
              🔥 بزن بریم مشاوره رایگان بگیریم!
            </button>
          </div>
        </div>
      </div>

      {/*  desktop  */}

      <div className="w-full mt-24 lg:flex lg:flex-col lg:gap-x-10 hidden pr-14 pl-14 gap-10">
        <div className="lg:w-full bg-red-100 m-auto flex justify-center items-center">
          <Image src="/images/banner-03.jpg" alt="" width={392} height={310} className={"w-full h-[600px]"}/>
        </div>
        <div className="lg:w-1/2 text-center mx-auto flex flex-wrap justify-start items-center">
          <div className="w-full m-auto text-[18px] font-extrabold">
            جایی که ایده‌هات جرقه می‌زنن!
          </div>

          <div className="w-full m-auto">
            <p className="mt-5 font-semibold  text-center">
              ما تو اسپارک‌آپ، فقط تبلیغات نمی‌کنیم… یه عالمه ایده خفن می‌سازیم
              که کسب‌وکارتو بترکونه! اینجا جاییه که رویاها به واقعیت تبدیل می‌شن
              و رفیق‌هایی پیدا می‌کنی که پایه‌ن تا ته مسیر باهات باشن.
            </p>

          </div>

          <button className="w-auto p-4 flex mx-auto justify-center items-center gap-x-5 bg-[#C1121F] rounded-xl text-white mt-4">
            🔥 بزن بریم مشاوره رایگان بگیریم!
          </button>
        </div>


      </div>
    </>
  );
};

export default SparkUp;

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#740B13] m-auto mt-14 pr-14 pl-14 pt-12 pb-12 lg:flex hidden">
        <div className="w-full m-auto flex justify-between">
          <div className="lg:w-[393px]">
            <div className="w-full m-auto">
              <Image src="/images/spark.png" alt="" width={99} height={30} />
            </div>

            <div className="w-full m-auto mt-8 text-white">
              <p className="w-full">تلفن پشتیبانی : ۰۲۱۷۰۷۰۹۷۹۷</p>
              <p className="w-full mt-4">آدرس ایمیل : info@sparkup-agency.com</p>
            </div>

            <div className="w-full m-auto mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5447404040665!2d51.47017142545761!3d35.76199302553533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e047bf5380dcf%3A0x333cdbc25e260658!2z2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KrZh9ix2KfZhtiMINmF2YbYt9mC2Ycg27TYjCDYqNmI2LPYqtin2YYg2b7Zhtis2YXYjCDYp9uM2LHYp9mG!5e0!3m2!1sfa!2s!4v1741331598038!5m2!1sfa!2s"
                width="393"
                height="167"
                style={{ border: "none", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="lg:w-[297px] flex flex-wrap text-white">
            <div className="lg:w-1/2 m-auto mt-16 flex gap-y-4 flex-wrap">
              <div className="w-full">
                <Link href="#">صفحه اصلی</Link>
              </div>

              <div className="w-full">
                <Link href="#">خدمات</Link>
              </div>

              <div className="w-full">
                <Link href="#">نمونه کارها</Link>
              </div>

              <div className="w-full">
                <Link href="#">مقالات و منابع</Link>
              </div>
            </div>

            <div className="lg:w-1/2 m-auto mt-16 flex gap-y-4 flex-wrap">
              <div className="w-full">
                <Link href="#">درباره ما</Link>
              </div>

              <div className="w-full">
                <Link href="#">تماس با ما</Link>
              </div>

              <div className="w-full">
                <Link href="#">پرسش های متداول</Link>
              </div>
            </div>

            <div className="w-full m-auto mt-20 flex items-center gap-x-4">
              <Image src="/images/linkedin.png" alt="" width={20} height={20} />
              <Image
                src="/images/instagram.png"
                alt=""
                width={20}
                height={20}
              />
              <Image src="/images/x.png" alt="" width={20} height={20} />

              <p>بهمون سر بزن!</p>
            </div>
          </div>

          <div className="lg:w-[392px] text-white">
            <div className="w-full m-auto mt-16">خبرنامه اسپارک</div>

            <div className="w-[392px] h-[38px] m-auto flex gap-x-2 mt-5 pr-3 border-[1.5px] border-[#EDEDED] rounded-lg">
              <div className="w-[33px] h-[38px] flex justify-center items-center">
                <Image
                  src="/images/user-footer.png"
                  alt=""
                  width={17}
                  height={17}
                />
              </div>

              <input
                type="text"
                name=""
                className="lg:w-[355px] h-[34px] bg-transparent outline-none focus:ring-0 placeholder:text-[#F9F9F9]"
                placeholder="نام خود را وارد کنید *"
              />
            </div>

            <div className="w-[392px] h-[38px] m-auto flex gap-x-2 mt-5 pr-3 border-[1.5px] border-[#EDEDED] rounded-lg">
              <div className="w-[33px] h-[38px] flex justify-center items-center">
                <Image
                  src="/images/email-footer.png"
                  alt=""
                  width={17}
                  height={17}
                />
              </div>

              <input
                type="text"
                name=""
                className="lg:w-[355px] h-[34px] bg-transparent outline-none focus:ring-0 placeholder:text-[#F9F9F9]"
                placeholder="ایمیل خود را وارد کنید*"
              />
            </div>

            <div className="w-[392px] h-[38px] m-auto flex gap-x-2 mt-5 pr-3 border-[1.5px] border-[#EDEDED] rounded-lg">
              <div className="w-[33px] h-[38px] flex justify-center items-center">
                <Image
                  src="/images/tel-footer.png"
                  alt=""
                  width={17}
                  height={17}
                />
              </div>

              <input
                type="text"
                name=""
                className="lg:w-[355px] h-[34px] bg-transparent outline-none focus:ring-0 placeholder:text-[#F9F9F9]"
                placeholder="شماره تماس خود را وارد کنید *"
              />
            </div>

            <button className="w-[392px] h-[38px] bg-[#C1121F] m-auto mt-5 rounded-lg">
              عضویت در خبرنامه
            </button>
          </div>
        </div>
      </div>

      {/*   mobile  */}
      <div className="lg:hidden block w-full bg-[#740B13] text-white mt-10 pt-5 pb-5 pr-5 pl-5">
        <div className="w-full flex justify-end m-auto">
          <Image src="/images/spark.png" alt="" width={99} height={30} />
        </div>

        <div className="w-full m-auto mt-6 text-[14px]">
          <p>
            می‌دونیم هر کسب‌وکاری داستان و چالش‌های خودشو داره. واسه همین به جای
            اینکه فقط یه سری خدمات تبلیغاتی بهتون بدیم، می‌شینیم کنارتون، با هم
            گپ می‌زنیم و از نیازهاتون می‌گین. بعدش با یه عالمه ایده خلاقانه،
            راهکارهایی رو براتون می‌چینیم که مخصوص خودتون باشه
          </p>
        </div>

        <div className="w-full m-auto mt-6 text-[14px] flex gap-x-3">
          <div className="w-1/3 flex flex-wrap gap-y-4">
            <Link href="#" className="w-full">
              صفحه اصلی
            </Link>
            <Link href="#" className="w-full">
              خدمات
            </Link>
            <Link href="#" className="w-full">
              نمونه کارها
            </Link>
          </div>

          <div className="w-1/3 flex flex-wrap gap-y-4">
            <Link href="#" className="w-full">
              مقالات و منابع
            </Link>
            <Link href="#" className="w-full">
              درباره ما
            </Link>
            <Link href="#" className="w-full">
              تماس با ما
            </Link>
          </div>

          <div className="w-1/3 flex flex-wrap gap-y-4">
            <Link href="#" className="w-full">
              پرسش های متداول
            </Link>
          </div>
        </div>

        <div className="w-full m-auto mt-10">
          <div className="w-full m-auto">تلفن پشتیبانی : ۰۲۱۷۰۷۰۹۷۹۷</div>

          <div className="w-full m-auto mt-7">
            آدرس ایمیل : tripjet@gmail.com
          </div>

          <div className="w-full m-auto mt-7 flex gap-x-5">
            <Image src="/images/linkedin.png" alt="" width={22} height={22} />
            <Image src="/images/x.png" alt="" width={22} height={22} />
            <Image src="/images/instagram.png" alt="" width={22} height={22} />

            <p>بهمون سر بزن!</p>
          </div>
        </div>

        <div className="w-full m-auto mt-10 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5447404040665!2d51.47017142545761!3d35.76199302553533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e047bf5380dcf%3A0x333cdbc25e260658!2z2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KrZh9ix2KfZhtiMINmF2YbYt9mC2Ycg27TYjCDYqNmI2LPYqtin2YYg2b7Zhtis2YXYjCDYp9uM2LHYp9mG!5e0!3m2!1sfa!2s!4v1741331598038!5m2!1sfa!2s"
            width="393"
            height="167"
            style={{ border: "none", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full text-white">
          <div className="w-full m-auto mt-16">خبرنامه اسپارک</div>

          <div className="w-full h-[38px] m-auto flex gap-x-2 mt-5 pr-3 border-[1.5px] border-[#EDEDED] rounded-lg">
            <div className="w-[33px] h-[38px] flex justify-center items-center">
              <Image
                src="/images/user-footer.png"
                alt=""
                width={17}
                height={17}
              />
            </div>

            <input
              type="text"
              name=""
              className="lg:w-[355px] h-[34px] bg-transparent outline-none focus:ring-0 placeholder:text-[#F9F9F9]"
              placeholder="نام خود را وارد کنید *"
            />
          </div>

          <div className="w-full h-[38px] m-auto flex gap-x-2 mt-5 pr-3 border-[1.5px] border-[#EDEDED] rounded-lg">
            <div className="w-[33px] h-[38px] flex justify-center items-center">
              <Image
                src="/images/email-footer.png"
                alt=""
                width={17}
                height={17}
              />
            </div>

            <input
              type="text"
              name=""
              className="lg:w-[355px] h-[34px] bg-transparent outline-none focus:ring-0 placeholder:text-[#F9F9F9]"
              placeholder="ایمیل خود را وارد کنید*"
            />
          </div>

          <div className="w-full h-[38px] m-auto flex gap-x-2 mt-5 pr-3 border-[1.5px] border-[#EDEDED] rounded-lg">
            <div className="w-[33px] h-[38px] flex justify-center items-center">
              <Image
                src="/images/tel-footer.png"
                alt=""
                width={17}
                height={17}
              />
            </div>

            <input
              type="text"
              name=""
              className="lg:w-[355px] h-[34px] bg-transparent outline-none focus:ring-0 placeholder:text-[#F9F9F9]"
              placeholder="شماره تماس خود را وارد کنید *"
            />
          </div>

          <button className="w-full h-[38px] bg-[#C1121F] m-auto mt-5 rounded-lg">
            عضویت در خبرنامه
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;

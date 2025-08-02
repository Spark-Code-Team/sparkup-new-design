import Image from "next/image";
import { twMerge } from "tailwind-merge";

const TitlePages = ({ title , className}) => {
  return (
    <>
      <div className={twMerge("w-full text-center flex  justify-center gap-x-5 text-[20px] flex-wrap items-center  mt-12 font-azar font-bold  pr-0 ", className)}>
        <Image src="/images/bg1.png" alt="" width={42} height={12} />
        {title}
        <Image src="/images/bg2.png" alt="" width={42} height={12} />
      </div>
    </>
  );
};

export default TitlePages;

import Image from "next/image";

const TitlePages = ({ title }) => {
  return (
    <>
      <div className="w-full text-center flex lg:justify-start justify-center gap-x-5 text-[20px] flex-wrap items-center lg:mt-0 mt-12 font-bold lg:pr-14 pr-0">
        <Image src="/images/bg1.png" alt="" width={42} height={12} />
        {title}
        <Image src="/images/bg2.png" alt="" width={42} height={12} />
      </div>
    </>
  );
};

export default TitlePages;

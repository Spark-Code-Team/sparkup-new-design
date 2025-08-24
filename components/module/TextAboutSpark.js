const TextAboutSpark = ({ title, description }) => {
  return (
    <>
      <div className="w-full font-azar text-justify  px-4">
        <div className="w-[90%] m-auto mt-10">
          <div className="w-full m-auto text-[18px] text-center font-bold">{title}</div>

          <div className="w-full m-auto mt-6">{description}</div>
        </div>
      </div>
    </>
  );
};

export default TextAboutSpark;

import TitlePages from "@/components/module/TitlePages";
import JobOpportunities from "@/components/template/job/JobOppTemplate";

export default function Job() {
  return (
    <>
      <div className="flex flex-col font-azar gap-4 items-center justify-evenly mt-10  md:mt-32">
        <div>
          <TitlePages
            title={"تو هم می‌خوای بخشی از تیم اسپارک‌آپ باشی؟"}
            className={"text-lg"}
          />
        </div>
        <div className=" text-center">
          <h5 className="text-base ">
            <p>
              {" "}
              ما همیشه دنبال آدمای خلاق، پرانرژی و پایه‌ایم که با یه دنیا
              ایده‌های ناب بیان و با ما هم‌مسیر بشن! اگه تو هم دنبال یه تیم خاص
              می‌گردی، جایی بهتر از اینجا پیدا نمی‌کنی!
            </p>
          </h5>
        </div>
        <div className="w-full">
          <JobOpportunities />
        </div>
      </div>
    </>
  );
}

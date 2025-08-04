import Accordion from "@/components/elements/Accordion";
import CustomButton from "@/components/elements/CustomButton";
import TitlePages from "@/components/module/TitlePages";
import { FaCloud } from "react-icons/fa";
import Link from "next/link";

export default function FAQTemplate() {
  const faqItems = [
    {
      id: 1,
      question: "❓ اسپارک‌آپ دقیقاً چه کارهایی انجام می‌ده؟",
      answer:
        "🧠 ما راهکارهای تبلیغاتی و بازاریابی می‌سازیم، نه فقط خدمات آماده! از طراحی استراتژی گرفته تا تولید محتوا، مدیریت شبکه‌های اجتماعی، کمپین‌های خلاقانه، و تبلیغات محیطی – هر چی برای رشد کسب‌وکارت نیاز داری، ما داریم.",
    },
    {
      id: 2,
      question: "❓ چجوری می‌تونم بدونم اسپارک‌آپ برای کسب‌وکار من مناسبه؟",
      answer:
        "👌 فقط کافیه یه جلسه گپ بزنیم! ما بدون کلیشه و نسخه‌ی آماده، نیازتو می‌شنویم و اگه حس کردیم می‌تونیم واقعاً کمکت کنیم، استارت می‌زنیم. رفاقتی، بدون فشار!",
    },
    {
      id: 3,
      question: "❓ قیمت خدمات چطوری حساب می‌شه؟",
      answer:
        "💵 قیمت‌گذاری ما بر اساس نیاز واقعی پروژه‌ته. بعد از مشاوره رایگان و فهمیدن دقیق نیازات، یه پیشنهاد قیمت شفاف و بدون سورپرایز بهت می‌دیم.",
    },
    {
      id: 4,
      question: "❓ پروژه چقدر طول می‌کشه؟",
      answer:
        "⌛ بستگی به نوع پروژه داره. یه کمپین کوچیک شاید ۲ هفته‌ای جمع بشه، یه پروژه‌ی برندینگ کامل شاید ۲ ماه طول بکشه. ولی خیالت راحت، ما همیشه زمان‌بندی شفاف و واقعی می‌دیم و بهش پایبندیم.",
    },
    {
      id: 5,
      question: "❓ همکاری با شما چجوری شروع میشه؟",
      answer:
        "🚀 خیلی ساده: یه جلسه رایگان رزرو می‌کنی با هم گپ می‌زنیم، نیازتو بررسی می‌کنیم اگه هر دو طرف حال کردیم، قرارداد می‌بندیم و بزن بریم!",
    },
    {
      id: 6,
      question: "❓ می‌تونم فقط برای مشاوره بیام پیشتون؟",
      answer:
        "👩‍🏫 صد البته!  ما عاشق اینیم که ایده بدیم و کمک کنیم. حتی اگه فقط یه مشاوره بخوای و پروژه‌ای در کار نباشه، پایه‌ایم کمکت کنیم.",
    },
    {
      id: 7,
      question: "❓ آیا خدماتتون فقط برای برندهای بزرگه؟",
      answer:
        "🚀 اصلاً و ابداً! ما با کسب‌وکارهای کوچیک، استارتاپ‌ها، کارآفرینای تازه‌کار و برندهای بزرگ کار می‌کنیم. اگه دلت می‌خواد برندت بدرخشه، ما هواتو داریم!",
    },
  ];

  return (
    <div className="bg-gray-50 flex font-azar flex-col items-center justify-evenly gap-10 min-h-screen py-12 sm:py-20 px-4">
      <TitlePages
        title={"سوال داری؟ پایه‌ایم جواب بدیم!"}
        className={"text-lg"}
      />
      <div className="font-azar  text-center">
        <h5 className="text-base">
          <p>
            {" "}
            ما اینجاییم تا رفاقتی بشینیم، نیازتو بشنویم و برات یه راه‌حل بسازیم.
            بدون تعهد، بدون هزینه. فقط یه گپ دوستانه!
          </p>
        </h5>
      </div>
      <Accordion items={faqItems} />
      <TitlePages
        title={"سوالی داشتی که اینجا جوابشو پیدا نکردی؟"}
        className={"text-lg"}
      />
      <div className="font-azar  text-center">
        <h5 className="text-base">
          <p> بی‌خیال سرچ بازی! یه پیام بده، ما سریع جوابتو می‌دیم 😉</p>
        </h5>
      </div>
      <Link href="/contact-us#contact-form">
        <CustomButton rightIcon={<FaCloud />}>یه سوال جدید بپرس!</CustomButton>
      </Link>
    </div>
  );
}

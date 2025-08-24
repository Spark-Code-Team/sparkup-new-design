import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function CardComponent({
  image, // string (src) یا یک کامپوننت React
  width,
  height,
  title,
  description,

  // کلاس‌های سفارشی
  containerClassName,
  imageClassName,
  titleClassName,
  descriptionClassName,

  // کنترل هاور (همه اختیاری)
  hover = true, // افکت عمومی هاور (scale/shadow)
  hoverBg, // مثلا "hover:bg-[#C1121F]" یا "hover:bg-blue-600"
  hoverText, // مثلا "group-hover:text-white"
  hoverIconInvert = true, // سفید کردن آیکن روی هاور
  extraHoverClasses = "", // هر کلاس اضافه‌ی هاور برای کانتینر
}) {
  const isIconComponent =
    image && (typeof image === "function" || typeof image === "object");
  const Icon = isIconComponent ? image : null;

  // افکت‌های عمومی هاور
  const genericHover = hover ? "hover:scale-105 hover:shadow-red-800" : "";

  return (
    <div
      className={twMerge(
        // هیچ رنگ هاوری اینجا «سخت‌کد» نشده
        "group bg-white rounded-lg text-center shadow-md overflow-hidden w-[500px] h-auto py-5 flex flex-col transition-all duration-200 ease-in-out",
        genericHover,
        hoverBg, // ← رنگ هاورِ قابل تنظیم
        extraHoverClasses, // ← هر چیز اضافه
        containerClassName
      )}
    >
      {(image || Icon) && (
        <div
          className={twMerge(
            "flex items-center justify-center",
            imageClassName
          )}
        >
          {Icon ? (
            <Icon
              className={twMerge(
                `
                w-52 h-52 transition-colors duration-200
                [&_path]:transition-colors [&_polygon]:transition-colors [&_rect]:transition-colors [&_circle]:transition-colors [&_g]:transition-colors
              `,
                // فقط اگر خواستی آیکن روی هاور سفید شود
                hoverIconInvert &&
                  `
                  group-hover:[&_path]:fill-white group-hover:[&_polygon]:fill-white group-hover:[&_rect]:fill-white group-hover:[&_circle]:fill-white group-hover:[&_g]:fill-white
                  group-hover:[&_path]:stroke-white group-hover:[&_polygon]:stroke-white group-hover:[&_rect]:stroke-white group-hover:[&_circle]:stroke-white group-hover:[&_g]:stroke-white
                `
              )}
            />
          ) : (
            <Image
              src={image}
              alt={title || "Card Image"}
              width={width}
              height={height}
              className="w-full object-cover"
            />
          )}
        </div>
      )}

      {(title || description) && (
        <div className="p-4 flex-grow flex flex-col items-center justify-center">
          {title && (
            <h3
              className={twMerge(
                "font-azar font-bold text-xl mb-2 text-gray-800 transition-colors duration-200",
                hoverText, // ← مثلا group-hover:text-white
                titleClassName
              )}
            >
              {title}
            </h3>
          )}

          {description && (
            <p
              className={twMerge(
                "text-gray-700 font-azar font-normal text-base transition-colors duration-200",
                hoverText, // ← مثلا group-hover:text-white/90
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

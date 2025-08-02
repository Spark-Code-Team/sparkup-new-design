import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function CardComponent({
  image,
  width,
  height,
  title,
  description,
  containerClassName,
  imageClassName,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div
      className={twMerge(
        "bg-white rounded-lg shadow-md overflow-hidden w-[500px] h-auto py-5 flex flex-col hover:scale-105 hover:shadow-red-800 transition-all duration-200 ease-in-out",
        containerClassName
      )}
    >
      {image && (
        <Image
          src={image}
          alt={title || "Card Image"}
          width={width}
          height={height}
          className={twMerge("w-full object-cover", imageClassName)}
        />
      )}

      {(title || description) && (
        <div className="p-4 flex-grow">
          {title && (
            <h3
              className={twMerge(
                "font-azar font-bold text-xl mb-2 text-gray-800",
                titleClassName
              )}
            >
              {title}
            </h3>
          )}

          {description && (
            <p
              className={twMerge(
                "text-gray-700 font-azar font-normal text-base",
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

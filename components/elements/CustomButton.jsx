// components/CustomButton.jsx

import { twMerge } from "tailwind-merge";

// کامپوننت اسپینر برای نمایش در حالت لودینگ
const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function CustomButton({
  children,
  leftIcon,
  rightIcon,
  className,
  isLoading = false, // اضافه کردن پراپ جدید
  ...props
}) {
  return (
    <button
      className={twMerge(
        "inline-flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white bg-red-700 rounded-md shadow-sm hover:scale-105 transition-all ease-in-out hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 duration-200 hover:shadow-md disabled:opacity-75 disabled:cursor-not-allowed font-azar",
        className
      )}
      disabled={isLoading} // غیرفعال کردن دکمه در حالت لودینگ
      {...props}
    >
      {isLoading ? (
        <div className="flex flex-row items-start justify-end gap-4">
          <div>منتظر بمانید ...</div>
          <div>
            <Spinner />
          </div>
        </div>
      ) : (
        // در غیر این صورت، محتوای اصلی را نمایش بده
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}

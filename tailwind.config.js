/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        azar: ["azar", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#F3CDD0",
          200: "#E69EA4",
          300: "#DA7077",
          400: "#CD414B",
          500: "#C1121F",
          600: "#9A0E19",
          700: "#740B13",
          800: "#4D070C",
          900: "#270406",
        },
      },
    },
  },
  safelist: [
    // پس‌زمینه برند
    "bg-[#053C5E]",
    "bg-[#43B1AC]",
    "bg-[#FF8500]",
    "bg-[#C1121F]",
    // هاورِ پس‌زمینه
    "hover:bg-[#053C5E]",
    "hover:bg-[#43B1AC]",
    "hover:bg-[#FF8500]",
    "hover:bg-[#C1121F]",
    // رنگ متن پایه و هاور
    "text-white",
    "text-white/90",
    "text-black",
    "text-black/80",
    "group-hover:text-white",
    "group-hover:text-black",
    "group-hover:text-white/90",
  ],
  plugins: [],
};

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
                'azar': ['azar', 'sans-serif'],
            },
            colors: {
                primary: {
                    '100': '#F3CDD0',
                    '200': '#E69EA4',
                    '300': '#DA7077',
                    '400': '#CD414B',
                    '500': '#C1121F',
                    '600': '#9A0E19',
                    '700': '#740B13',
                    '800': '#4D070C',
                    '900': '#270406',
                }
            }
        },
    },
    plugins: [],
}


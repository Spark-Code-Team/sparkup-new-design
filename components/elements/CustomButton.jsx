export default function CustomButton({size = 'md', text = 'text test', variant = 'contained', color = 'white'}) {


    if (variant === 'contained' && size === 'sm') {
        return (
            <button
                className={`bg-primary-500 rounded-lg border-2 border-primary-600 w-auto px-4 text-center flex flex-ro justify-center items-center h-10 text-${color} hover:scale-105 hover:shadow-md transition duration-300 ease-in-out `}>
                {text}
            </button>
        )
    }

    if (variant === 'contained' && size === 'md') {
        return (
            <button
                className={`bg-primary-500 rounded-lg border-2 border-primary-600 w-auto px-8 text-center flex flex-ro justify-center items-center h-16 text-${color} hover:scale-105 hover:shadow-md transition duration-300 ease-in-out `}>
                {text}
            </button>
        )
    }


    if (variant === 'contained' && size === 'lg') {
        return (
            <button
                className={`bg-primary-500 rounded-lg border-2 border-primary-600 w-auto px-12 text-center flex flex-ro justify-center items-center h-20 text-${color} hover:scale-105 hover:shadow-md transition duration-300 ease-in-out `}>
                {text}
            </button>
        )
    }
}
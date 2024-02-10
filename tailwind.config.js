/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
            'anton': ['Anton', 'sans-serif'],
        },
        colors: {
            black: '#0D0D0D',
            gray: '#191919',
            white: '#FFFFFF',
            blue: '#6B93CF',
        },
    },
    plugins: [],
}
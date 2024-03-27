/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./slices/**/*.vue",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
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
            blue: '#7BA2EF',
            yellow: '#EFE37B',
        },
    },
    plugins: [],
}
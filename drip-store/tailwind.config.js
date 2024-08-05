/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif']
      },
      
      colors: {
        'primary': "#C92071",
        'warning': "#F6AA1C",
        'dark-gray-2': "#474747"
      },
      extend: {},
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'customGray': '#18181b',
        'darkCustomGrey': '#252529',
        'outlineGray': '#2a2a2b',
        'customTeal': '#57e2e9',
        'lighCustomTeal': 'rgb(190, 228, 243)'
      },
      animation: {
        fadein: 'fadein 1s ease-out 1 both',
      },
      keyframes: {
        fadein: {
          '0%': { transform: 'perspective(500px) translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg)', opacity: '0' },
          '100%': { transform: ' perspective(500px) translate3d(0, 0, 0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}

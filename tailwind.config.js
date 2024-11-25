// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rotateSlow: {
          '0%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(-20deg)' },
        },
      },
      animation: {
        'rotate-slow': 'rotateSlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};


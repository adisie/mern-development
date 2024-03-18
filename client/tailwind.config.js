/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottomShadow: '0 1px 12px 3px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        workSans: ["Work Sans"],
      },
    },
  },
  plugins: [],
};

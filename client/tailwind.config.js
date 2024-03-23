/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        headerBottomShadow: "0 1px 7px .15px rgba(0, 0, 0, 0.075)",
      },
    },
  },
  plugins: [],
};

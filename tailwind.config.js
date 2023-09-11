/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "480px" },
        tablet: { max: "1280px" },
      },
      fontFamily: {
        Lora: ["Lora"],
      },
    },
  },
  plugins: [],
};

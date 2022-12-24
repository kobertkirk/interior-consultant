/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{ 
        Crimson: ["Crimson Pro","serif"],
        Lora: ["Lora", "serif"],
        Montserrat:["Montserrat", "mono"],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flowkitblue: "var(--flowkitblue)",
        flowkitcharcoal: "var(--flowkitcharcoal)",
        flowkitgreen: "var(--flowkitgreen)",
        flowkitpurple: "var(--flowkitpurple)",
        flowkitred: "var(--flowkitred)",
        flowkitwhite: "var(--flowkitwhite)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // For App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "serif"],
        sans: ["var(--font-source-sans-3)", "sans-serif"], // Use your CSS variable
      },
    },
  },
  plugins: [],
};

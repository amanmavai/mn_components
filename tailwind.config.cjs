/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: true
  },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "mdx": "909px",
        "lgx": "1105px"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Path for all your pages and components in app directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "rgba(0, 153, 255, 1)",
          200: "rgba(130, 205, 255, 1)",
        },
      },
      minHeight: {
        '265vh': '265vh',
        '340vh': '340vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-filters'), // Make sure this is included
  ],
};
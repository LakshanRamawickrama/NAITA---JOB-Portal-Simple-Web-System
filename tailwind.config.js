/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#87212e",
        secondary: "#1f2937",
        background: "#f3f4f6", // Light gray background common in admin/dashboards
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        xl: "0 3px 15px rgb(175, 67, 144, 1)"
      },
      dropShadow: {
        xl: "0 3px 15px rgb(175, 67, 144, 1)"
      },
      animation: {
        "ping-slow": "ping 3s linear infinite"
      }
    },
  },
  plugins: [],
}


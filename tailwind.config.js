/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
   extend: {
  colors: {
    bg: "#0f172a",
  primary: "#22d3ee",
  accent: "#a7f3d0",
  glow: "#f472b6",
  text: "#e5e7eb",
  },
},
  },
  plugins: [],
}

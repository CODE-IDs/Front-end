/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#f7ead9',
        secondary: '#e1d2a9',
        third: '#88b499',
        greenM: '#619885',
        fifty: '#67594e'
      }
    },
   
  },
  plugins: [],
}


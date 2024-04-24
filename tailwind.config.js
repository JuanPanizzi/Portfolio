/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#49DE80',
        'gray-1': '#374151',
        'gray-2': '#1A252B',
        'gray-3': '#232E34',
        'black-fondo': '#1a1c22',
        'black-cards': '#19181B',
        'black-btn': '#2B2B2B',
        'black-btn-hover': '#3D3D3D',
        'black-shadow': '#040105'
      } 
    },
  },
  plugins: [],
}


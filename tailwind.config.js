/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      heading: ['Kelly Slab', 'sans-serif'],
      body: ['Karma', 'sans-serif']
    },
    extend: {
      boxShadow: {
        oc: '-5px 8px 43px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
};

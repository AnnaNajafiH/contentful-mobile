/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#6495ED', 
      }
    },
  },
  plugins: [],
}


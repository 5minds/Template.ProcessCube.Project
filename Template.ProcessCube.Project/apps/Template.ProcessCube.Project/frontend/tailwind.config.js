/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'phone': '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1200px',
      },
      colors: {
        '5mindsorange': '#f7a823',
        '5mindsblue': '#00aed7',
        '5mindsprim-1': '#0e283b',
        '5mindsprim-2': '#0e2f46',
      },
      fontSize: {
        'heading-1': ['2.5rem', {
          lineHeight: '2.25rem',
          letterSpacing: '1rem',
          fontWeight: '200',
        }],
        'heading-2': '2rem',
        'heading-3': '1.5rem',
      }
    },
  },
  plugins: [],
}

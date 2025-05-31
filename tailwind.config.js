/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saddleBrown: '#8B4513',
        goldenrod: '#DAA520',
        maroon: '#800000',
        beige: '#F5F5DC',
      },
      fontFamily: {
        serif: ['Palatino', 'Georgia', 'serif'],
        sans: ['Optima', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg')",
      },
    },
  },
  plugins: [],
};
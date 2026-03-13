/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#8f9631',
        coral: '#ff7d59',
        pink: '#ffbde8',
        ivory: '#fffaed',
        powder: '#99b0ed',
        mist: '#cddbf9',
        peach: '#faab94',
        butter: '#ffde94',
        ink: '#2c2c34',
        sand: '#f4efe4',
        shell: '#ffe5e0',
      },
      boxShadow: {
        card: '0 18px 40px rgba(44, 44, 52, 0.08)',
        float: '0 10px 24px rgba(44, 44, 52, 0.12)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 1px 1px, rgba(44,44,52,0.05) 1px, transparent 0)',
      },
      fontFamily: {
        sans: ['Quicksand', '"Trebuchet MS"', '"Segoe UI"', 'sans-serif'],
        display: ['"Palatino Linotype"', '"Book Antiqua"', 'Georgia', 'serif'],
        accent: ['"Segoe Script"', '"Lucida Handwriting"', 'cursive'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0px)' },
          '50%': { transform: 'rotate(3deg) translateY(-6px)' },
        },
      },
      animation: {
        rise: 'rise 700ms ease-out forwards',
        floaty: 'floaty 6s ease-in-out infinite',
        sway: 'sway 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#08000F',
          dark: '#050009',
          light: '#120020',
        },
        neon: {
          purple: '#9D00FF',
          magenta: '#B026FF',
          crimson: '#FF007F',
          pink: '#FF2DAA',
          'deep-purple': '#4A0080',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-heart': 'floatHeart 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'text-glow': 'textGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(157,0,255,0.4), 0 0 40px rgba(255,45,170,0.2)',
          },
          '50%': {
            boxShadow: '0 0 35px rgba(157,0,255,0.7), 0 0 70px rgba(255,45,170,0.4)',
          },
        },
        floatHeart: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-100vh) scale(0.5)', opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        textGlow: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(255,45,170,0.4), 0 0 20px rgba(157,0,255,0.3)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(255,45,170,0.8), 0 0 40px rgba(157,0,255,0.6), 0 0 60px rgba(255,0,127,0.3)',
          },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{ejs,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        cinema: {
          950: '#07070a',
          900: '#0b0b0e',
          800: '#121216',
          700: '#1a1a20',
          600: '#25252d',
          500: '#3a3a45',
          400: '#6b6b7b',
          300: '#9c9cab',
          200: '#c4c4cf',
          100: '#e3e3e9',
          50: '#f3f3f6',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#e09e23',
          500: '#c5850f',
          600: '#a36b0c',
          700: '#82530a',
          800: '#613d08',
          900: '#412906',
        },
        gold: {
          light: '#f6d365',
          DEFAULT: '#e09e23',
          dark: '#c5850f',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        imageDrift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-60%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        parallaxScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-30%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spotlight: {
          '0%': { transform: 'translate(-7%, -7%) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translate(7%, 7%) scale(1.1)', opacity: '0.5' },
          '100%': { transform: 'translate(-10%, -10%) scale(1)', opacity: '0.3' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        fadeIn: 'fadeIn 1s ease forwards',
        scaleIn: 'scaleIn 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        marquee: 'marquee 200s linear infinite',
        'marquee-reverse': 'marquee 220s linear infinite reverse',
        imageDrift: 'imageDrift 90s linear infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
        textReveal: 'textReveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        spotlight: 'spotlight 12s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        cursorBlink: 'cursorBlink 0.8s infinite',
      },
    },
  },
  plugins: [],
};

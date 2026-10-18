/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#eb5d1e',
          darkOrange: '#c94409',
          lightOrange: '#ff7a42',
          wash: '#FAF7F4',
          washDeep: '#FFF0E6',
          lightBg: '#FFF3ED',
          section: '#F3EFEA',
          secondary: '#0F172A',
          dark: '#111827',
          ink: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '10px',
        card: '16px',
      },
      boxShadow: {
        'glow-orange': '0 10px 28px -4px rgba(235, 93, 30, 0.28)',
        'glow-orange-lg': '0 18px 42px -6px rgba(235, 93, 30, 0.38)',
        'elevated': '0 10px 30px -6px rgba(15, 23, 42, 0.07)',
        'elevated-lg': '0 22px 48px -12px rgba(15, 23, 42, 0.15)',
      },
      transitionTimingFunction: {
        agus: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        floatSoft: 'floatSoft 6s ease-in-out infinite',
        floatDelayed: 'floatSoft 7s ease-in-out 1.5s infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(0.96)' },
        },
      },
    },
  },
  plugins: [],
};

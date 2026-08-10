/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#eb5d1e',
          darkOrange: '#d04b0e',
          lightOrange: '#ff7a42',
          wash: '#FFF3ED',
          washDeep: '#FFE4D6',
          lightBg: '#FFF3ED',
          section: '#F5F0EB',
          secondary: '#2c3e50',
          dark: '#1a2332',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '8px',
        card: '12px',
      },
      boxShadow: {
        'glow-orange': '0 8px 32px rgba(235, 93, 30, 0.25)',
        'glow-orange-lg': '0 16px 48px rgba(235, 93, 30, 0.35)',
      },
      transitionTimingFunction: {
        agus: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        floatSoft: 'floatSoft 6s ease-in-out infinite',
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

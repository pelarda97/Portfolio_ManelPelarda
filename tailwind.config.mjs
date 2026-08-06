/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan:   '#00f5ff',
          purple: '#bf5af2',
          green:  '#32d74b',
          blue:   '#0a84ff',
        },
        dark: {
          950: '#030712',
          900: '#050810',
          800: '#0a0f1e',
          700: '#0f1629',
          600: '#161e35',
          500: '#1e2a45',
          400: '#263354',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'glow':       'glow 2.5s ease-in-out infinite alternate',
        'float':      'float 6s ease-in-out infinite',
        'scan-line':  'scanLine 8s linear infinite',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%':   { textShadow: '0 0 4px rgba(0,245,255,0.4)' },
          '100%': { textShadow: '0 0 24px rgba(0,245,255,0.95), 0 0 48px rgba(0,245,255,0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      boxShadow: {
        'neon-cyan':   '0 0 8px rgba(0,245,255,0.5), 0 0 24px rgba(0,245,255,0.25)',
        'neon-purple': '0 0 8px rgba(191,90,242,0.5), 0 0 24px rgba(191,90,242,0.25)',
        'card':        '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover':  '0 8px 40px rgba(0,245,255,0.12)',
      },
    },
  },
  plugins: [],
};

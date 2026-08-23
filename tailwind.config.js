/** @type {import('tailwindcss').Config} */

function withOpacity(variableName, rgbVariableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${rgbVariableName}), ${opacityValue})`;
    }
    return `var(${variableName})`;
  };
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      colors: {
        dark: {
          base: withOpacity('--bg-base', '--bg-base-rgb'),
          surface: withOpacity('--bg-surface', '--bg-surface-rgb'),
          elevation: withOpacity('--bg-elevation', '--bg-elevation-rgb'),
          border: withOpacity('--border-color', '--border-color-rgb'),
          borderMuted: withOpacity('--border-muted', '--border-muted-rgb'),
        },
        brand: {
          gold: withOpacity('--brand-gold', '--brand-gold-rgb'),
          goldHover: withOpacity('--brand-gold-hover', '--brand-gold-hover-rgb'),
          goldDim: 'var(--brand-gold-dim)',
        },
        trade: {
          green: withOpacity('--trade-green', '--trade-green-rgb'),
          greenDim: 'var(--trade-green-dim)',
          red: withOpacity('--trade-red', '--trade-red-rgb'),
          redDim: 'var(--trade-red-dim)',
        },
        txt: {
          primary: withOpacity('--text-primary', '--text-primary-rgb'),
          secondary: withOpacity('--text-secondary', '--text-secondary-rgb'),
          muted: withOpacity('--text-muted', '--text-muted-rgb'),
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

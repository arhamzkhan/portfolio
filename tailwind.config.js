/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#08080a',
          card: '#0e0e12',
          cardHover: '#14141a',
          border: 'rgba(38, 38, 38, 0.7)',
          accent: '#22d3ee',
          accentMuted: 'rgba(34, 211, 238, 0.15)',
          muted: '#888898',
          text: '#d4d4d8',
          subtext: '#a1a1aa'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(34, 211, 238, 0.1)' },
          '50%': { boxShadow: '0 0 25px rgba(34, 211, 238, 0.25)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      },
      backgroundImage: {
        'terminal-radial': 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.07) 0%, rgba(8, 8, 10, 0) 70%)',
        'grid-pattern': 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)'
      }
    },
  },
  plugins: [],
}

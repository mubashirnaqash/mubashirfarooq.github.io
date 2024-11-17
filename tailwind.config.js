/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FFF8E8',
          200: '#FFE8CC',
          300: '#FFD8A8',
          400: '#FFC583',
          500: '#FFB15C',
          600: '#FF9838',
          700: '#FF8016',
          800: '#EE6C00',
          900: '#CC5D00',
        },
        accent: {
          peach: '#FF6B6B',
          mint: '#4FD1C5',
          lavender: '#9F7AEA'
        },
        gradient: {
          start: '#FFB4A1',
          middle: '#DCD0FF',
          end: '#7FFFD4',
        },
      },
      borderRadius: {
        'blob': '69% 31% 61% 39% / 47% 52% 48% 53%',
        'blob-2': '31% 69% 29% 71% / 52% 47% 53% 48%',
      },
      boxShadow: {
        'cream': '0 4px 20px -2px rgba(255, 177, 92, 0.2)',
        'glow': '0 0 15px rgba(147, 51, 234, 0.3)',
        'glow-lg': '0 0 25px rgba(147, 51, 234, 0.4)',
        'glow-cream': '0 0 15px rgba(255, 177, 92, 0.3)',
        'glow-accent': '0 0 15px rgba(159, 122, 234, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'cream-gradient': 'linear-gradient(135deg, #FFF8E8 0%, #FFE8CC 100%)',
        'cream-radial': 'radial-gradient(circle at center, #FFF8E8 0%, #FFE8CC 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-slow': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        sparkle: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: 0.25,
          },
          '50%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
        twinkle: {
          '0%, 100%': {
            opacity: 0.2,
            transform: 'scale(0.8)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.2)',
          },
        },
      },
      dropShadow: {
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.35)',
        'glow-purple': '0 0 20px rgba(167, 139, 250, 0.35)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.35)',
        'glow-yellow': '0 0 20px rgba(250, 204, 21, 0.35)',
        'glow-blue': '0 0 20px rgba(147, 197, 253, 0.35)',
      },
    },
  },
  plugins: [],
}

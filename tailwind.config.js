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
        'fancy': ['Poppins', 'sans-serif'],
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
        primary: {
          50: '#F4F9FF',
          100: '#E9F3FF',
          200: '#D4E7FF',
          300: '#BEDAFF',
          400: '#A9CEFF',
          500: '#93C2FF',
          600: '#7EB6FF',
          700: '#69AAFF',
          800: '#549EFF',
          900: '#3F92FF',
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
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        'blob': '69% 31% 61% 39% / 47% 52% 48% 53%',
        'blob-2': '31% 69% 29% 71% / 52% 47% 53% 48%',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'cream': '0 4px 20px -2px rgba(255, 177, 92, 0.2)',
        'glow': '0 0 15px rgba(255, 177, 92, 0.3)',
        'inner-glow': 'inset 0 2px 10px rgba(255, 177, 92, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'cream-gradient': 'linear-gradient(135deg, #FFF8E8 0%, #FFE8CC 100%)',
        'cream-radial': 'radial-gradient(circle at center, #FFF8E8 0%, #FFE8CC 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spin-reverse 8s linear infinite',
        'blob': 'blob 7s infinite',
        'bounce': 'bounce 1s infinite',
        'firework': 'firework 1s ease-out forwards',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'spin-reverse': {
          'from': {
            transform: 'rotate(360deg)'
          },
          'to': {
            transform: 'rotate(0deg)'
          }
        },
        'sparkle': {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
          '50%': {
            opacity: 0.5,
            transform: 'scale(0.5)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)'
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.1)'
          }
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': '0% center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% center'
          }
        },
        'blob': {
          '0%': {
            borderRadius: '69% 31% 61% 39% / 47% 52% 48% 53%',
          },
          '50%': {
            borderRadius: '31% 69% 29% 71% / 52% 47% 53% 48%',
          },
          '100%': {
            borderRadius: '69% 31% 61% 39% / 47% 52% 48% 53%',
          }
        },
        'firework': {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '50%': { transform: 'scale(1)', opacity: 0.8 },
          '100%': { transform: 'scale(1.2)', opacity: 0 }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: .5,
            transform: 'scale(1.2)',
          },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 5px rgba(139, 92, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.3)',
          },
          '50%': {
            textShadow: '0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)',
          },
        },
      },
      textShadow: {
        'glow': '0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)',
      },
      dropShadow: {
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.35)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.35)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.35)',
      }
    }
  },
  plugins: [],
}

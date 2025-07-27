/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f7fdf7',
          100: '#e8f5e8',
          200: '#d1ead1',
          300: '#a8d5a8',
          400: '#7abd7a',
          500: '#4d9f4d',
          600: '#3d8b3d',
          700: '#2d6b2d',
          800: '#1e4a1e',
          900: '#0f2e0f',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e8eae3',
          200: '#d0d5c7',
          300: '#b3bba4',
          400: '#96a182',
          500: '#7a8865',
          600: '#5f6b4f',
          700: '#4b5440',
          800: '#3c4334',
          900: '#32362c',
        },
        moss: {
          50: '#f4f6f3',
          100: '#e5e9e2',
          200: '#cbd3c5',
          300: '#a8b59e',
          400: '#859676',
          500: '#687958',
          600: '#526045',
          700: '#424d37',
          800: '#363e2f',
          900: '#2e3529',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
} 
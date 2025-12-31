module.exports = {
  content: [
    "./*.html",
    "./src/**/*.html",
    "./js/*.js",
  ],
  theme: {
    extend: {
      /* 🔹 BREAKPOINT CUSTOM */
      screens: {
        xs: '360px',   // HP modern
      },

      /* 🔹 COLORS */
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          light: '#3b82f6',
          dark: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#059669',
          light: '#10b981',
        },
      },

      /* 🔹 FONTS */
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        'formula': ['formula', 'sans-serif'],
        'gobold': ['gobold', 'sans-serif'],
      },
    },
     animation: {
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', },
          '50%': { transform: 'scale(1.1)',},
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
  },
  plugins: [],
}

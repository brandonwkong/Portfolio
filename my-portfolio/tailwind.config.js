module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        matte: {
          900: '#1f2937', // Example matte color
        },
        cool: {
          900: '#0f172a', // Example cool color
        },
      },
    },
  }, theme: {
    extend: {
      colors: {
        matte: {
          900: '#1f2937', // Example matte color
        },
        cool: {
          900: '#0f172a', // Example cool color
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
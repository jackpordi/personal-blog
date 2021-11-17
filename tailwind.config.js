module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    scale: {
      '101': '1.01',
      '115': '1.15',
    }
  },
  variants: {
    extend: {
     fontWeight: ['hover'],
    }
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    scale: {
      '101': '1.01',
      '115': '1.15',
    },
  },
  variants: {
    extend: {
     fontWeight: ['hover'],
    }
  },
  plugins: [],
}

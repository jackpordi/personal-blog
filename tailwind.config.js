module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
          600: "#25272C",
          800: "#15171C",
        }
      },
    },
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

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
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 50%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '25%, 75%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
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

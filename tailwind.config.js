module.exports = {
  purge: { enabled: true, content: ["./src/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wiki: "#e2dbc8",
        dark: "#151718",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

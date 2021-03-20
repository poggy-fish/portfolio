module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        md: "3rem",
        xl: "4rem",
      },
    },

    fontFamily: {
      body: ["Montserrat"],
      heading: ["Poppins"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

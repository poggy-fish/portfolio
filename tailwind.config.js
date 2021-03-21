module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        xl: "4rem",
      },
      center: true,
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

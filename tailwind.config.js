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

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },

    fontFamily: {
      body: ["Montserrat"],
      heading: ["Poppins"],
    },
    extend: {
      colors: {
        primary: "rgb(255, 156, 68)",
        primarybg: "rgba(255, 156, 68, 0.92)",
        black: "rgb(25,25,25)",
        textwhite: "rgba(255,255,255,0.9)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    spacing: {
      2: "0.5rem",
      4: "1rem",
      sm: "80px",
      md: "160px",
      lg: "340px",
      xl: "480px",
      xxl: "520px",
      extra: "620px",
      xxxl: "750px",
      about: "850px",
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

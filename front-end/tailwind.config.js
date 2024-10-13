module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your paths for all components
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "424px" }, // less than 425px
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      grayf1: "#F1F1F1",
      grayf3: "#333",
      grayf6: "#666666",
      gray80: "#808191",
      primaryText: "#ea0000",
      primary: "#475BE8",
      secondary: "#f2f2f",
      borderD: "#ddd",
    },
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif;"],
      },
    },
  },
  plugins: [],
};

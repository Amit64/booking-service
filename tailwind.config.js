module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2BD4BD",

          secondary: "#34d399",

          accent: "#F471B5",

          neutral: "#1D283A",

          "base-100": "#f5f5f4",

          info: "#0CA6E9",

          success: "#86efac",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};

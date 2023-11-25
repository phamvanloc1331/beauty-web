/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#111e22",
          "200": "#141414",
        },
        darkslategray: {
          "100": "#272d32",
          "200": "#1e2c30",
        },
        slategray: "#5c8692",
        lightslategray: "#7a9ca5",
        dimgray: "#555",
        darkgray: "#9bb7bf",
        aliceblue: {
          "100": "#edf5f7",
          "200": "#ebf3f5",
        },
        silver: "#c4c4c4",
        lightblue: "#95bfcb",
        lightgray: "#d3d3d3",
        azure: "#effcff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "dm-sans": "'DM Sans'",
        heebo: "Heebo",
        "playfair-display": "'Playfair Display'",
        inherit: "inherit",
      },
    },
    fontSize: {
      lg: "18px",
      mini: "15px",
      mid: "17px",
      "3xl": "22px",
      "21xl": "40px",
      "36xl": "55px",
      sm: "14px",
      "26xl": "45px",
      "9xl": "28px",
      "5xl": "24px",
      base: "16px",
      smi: "13px",
      "7xl": "26px",
      xl: "20px",
      lgi: "19px",
      "51xl": "70px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

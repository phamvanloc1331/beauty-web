/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slategray: "#5c8692",
        gray: {
          "100": "#111e22",
          "200": "#141414",
        },
        darkgray: "#9bb7bf",
        dimgray: "#555",
        aliceblue: {
          "100": "#edf5f7",
          "200": "#ebf3f5",
        },
        darkslategray: {
          "100": "#272d32",
          "200": "#1e2c30",
        },
        white: "#fff",
        lightslategray: "#7a9ca5",
        silver: "#c4c4c4",
        lightblue: "#95bfcb",
        azure: "#effcff",
        black: "#000",
        lightgray: "#d3d3d3",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "playfair-display": "'Playfair Display'",
        "dm-sans": "'DM Sans'",
        heebo: "Heebo",
        inherit: "inherit",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "3xl": "22px",
      smi: "13px",
      "26xl": "45px",
      mini: "15px",
      "7xl": "26px",
      xl: "20px",
      lgi: "19px",
      "9xl": "28px",
      "51xl": "70px",
      mid: "17px",
      "21xl": "40px",
      "11xl": "30px",
      "36xl": "55px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

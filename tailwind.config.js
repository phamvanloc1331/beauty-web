/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#111e22",
          "200": "#141414",
        },
        white: "#fff",
        darkslategray: {
          "100": "#272d32",
          "200": "#1e2c30",
        },
        slategray: "#5c8692",
        lightslategray: "#7a9ca5",
        dimgray: "#555",
        aliceblue: {
          "100": "#edf5f7",
          "200": "#ebf3f5",
        },
        darkgray: "#9bb7bf",
        silver: "#c4c4c4",
        lightblue: "#95bfcb",
        azure: "#effcff",
        black: "#000",
        lightgray: "#d3d3d3",
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
      "9xl": "28px",
      smi: "13px",
      base: "16px",
      "26xl": "45px",
      "7xl": "26px",
      xl: "20px",
      lgi: "19px",
      "51xl": "70px",
      "11xl": "30px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

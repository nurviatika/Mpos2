/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        sm: "16px",
        md: "24px",
        lg: "16px",
      },
      // padding: "1.5rem",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        black: "#050810",
        blackText: "#344346",
        pureBlack: "#000000",
        darkBlack: "#3A3E45",
        white: "#E4ECFF",
        softWhite: "#e3e5e8",
        whiteBg: "#FFFFFF",
        fadedWhite: "#E5E5E5",
        blue: "#2865FF",
        lightBlue: "#7c9ae6",
        gray: "#D9D9D9",
        lightGray: "#8B919E",
        darkGray: "#606874",
        neutralGray: "#FAFAFA",
        bgGray: "#F8F9FA",
        mediumGray: "#747B8B",
        softGray: "#F4F4F4",
        red: "#FF8682",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
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
        hitam: "#050810",
        abu: "#747B8B",
        semiHitam: "#000000",
        putih_bg: "#FFFFFF",
        semiAbu: "#8B919E",
        Biru: "#2865FF",
        biruMuda: "#7c9ae6",
        putih: "#E4ECFF",
        semiPutih: "#e3e5e8",
        abuGelap: "#606874",
        neutrayGray: "#FAFAFA",
        hitam_dl: "#3A3E45",
        abuPudar: "#F4F4F4",
        putih_pudar: "#E5E5E5",
        abu_bg: "#F8F9FA",
        hitam_text: "#344346",
      },
      screens: {
        sm: "425px",
        smd: "568px",
        md: "768px",
        mdlg: "990px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
}


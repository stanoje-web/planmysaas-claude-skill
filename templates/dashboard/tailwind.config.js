/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0f",
        surface: "#17171d",
        surface2: "#1f1f27",
        border: "#2a2a33",
        brand: {
          DEFAULT: "#ff7a1a",
          dim: "#ff7a1a33",
        },
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.3)",
      },
      borderRadius: {
        xl2: "0.9rem",
      },
    },
  },
  plugins: [],
};

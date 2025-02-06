/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slowping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%": { transform: "scale(1.5)", opacity: "0.5" },
          "100%": { transform: "scale(1.8)", opacity: "0.3" },
        },
      },
      animation: {
        "slow-ping": "slowping 1.2s cubic-bezier(0.2, 0, 0.4, 1) infinite",
      },
      colors: {
        primary: "#1DA1F2", // Set your custom primary color (e.g., Twitter blue)
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hover-img:hover img": {
          filter: "brightness(103%) contrast(103%)",
          opacity: ".99",
        },
      });
    },
  ],
};

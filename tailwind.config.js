/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      width: {
        53: "13.25rem"
      },
      borderImage: {
        gradient: "linear-gradient(to right, grey, #acacac) 1"
      },
      rotate: {
        19: "19deg",
        "-19": "-19deg"
      },
      minHeight: {
        custom: "400px",
        custom1: "800px"
      },
      screens: {
        xs: "360px", // Adding a custom breakpoint for very small screens
        ms: "500px",
        ml: "800px",
        "3xl": "1800px"
      },
      colors: {
        // Light colors
        "custom-primary": "#195883",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
        dark: "#1E1E1E"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      padding: {
        "custom-sm": "1rem",
        "custom-md": "2rem",
        "custom-lg": "3rem",
        "custom-xl": "4rem",
        "custom-2xl": "5rem",
        "custom-3xl": "6rem"
      },
      fontSize: {
        "custom-sm": "13px",
        "custom-md": "14px",
        "custom-lg": "15px",
        "custom-xl": "16px",
        "custom-2xl": "18px",
        "custom-3xl": "20px"
      }
    }
  },
  plugins: []
};

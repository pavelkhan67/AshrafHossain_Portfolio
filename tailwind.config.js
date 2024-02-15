/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3673db",

          "secondary": "#dd6c78",

          "accent": "#ce5450",

          "neutral": "#15151e",

          "base-100": "#ffffff",

          "info": "#70cef0",

          "success": "#1ecc6d",

          "warning": "#ecb851",

          "error": "#e15668",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: ["cyberpunk", "synthwave"],
    darkTheme: "synthwave",
  },
  darkMode: ["class", '[data-theme="synthwave"]'],
};

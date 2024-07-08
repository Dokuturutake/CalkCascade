/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
  theme: {
    extend: {
      colors:{
        "primary": "var(--theme-primary)",
        "secondary": "var(--theme-secondary)",
        "tertiary": "var(--theme-tertiary)",
        "quaternary": "var(--theme-quaternary)",
      }
    },
  },
  daisyui:{
    themes: [
      {
        mytheme: {
          "primary": "#211951",
          "secondary": "#836FFF",
          "accent": "#15F5BA",
          "neutral": "#F0F3FF",
          "base-100": "#211951",
        },
      },
      "coffee",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    fontFamily: {
      'sans': ['Prata', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        brightYellow: 'hsl(53, 95.5% 64.9%)',
        pitchBlack: 'hsl(240, 100%, 2.2%)',
        darkGray: 'hsl(228, 9.8%, 20%)',
        lightGray: 'hsl(0, 0%, 66.3%)',
        faintBlue: 'hsl(232, 18%, 18%)',
    }
  },
  },
  plugins: [],
}

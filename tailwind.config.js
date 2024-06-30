/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        // Dark theme color palette
        dark:{
          50: 'hsl(217, 28%, 15%)', //Intro $ Email signup bg
          100: 'hsl(218, 28%, 13%)', //Main background
          200: 'hsl(216, 53%, 9%)', //Footer background
          300: 'hsl(219, 30%, 18%)', //Testimonials background
          // Dark Accent
          400: 'hsl(176, 68%, 64%)', //Inside call to action gradient
          500: 'hsl(198, 60%, 50%)', //Inside call to action gradient
          600: 'hsl(0, 100%, 63%)', //Error
          // Dark Neutral
          800: 'hsl(0, 0%, 100%)', //White
        },
        // Light theme color palette
        light:{
          50: 'hsl(243, 87%, 12%)',  //Very Dark blue
          100: 'hsl(238, 22%, 44%)', //Desaturated blue
          // Light Accent
          200: 'hsl(224, 93%, 58%)', //Bright Blue
          300: 'hsl(170, 45%, 43%)', //Moderate Cyan
          // Light Neutral
          400: 'hsl(240, 75%, 98%)', //Light grayish blue
          500: 'hsl(0, 0%, 75%)', //Light gray
          600: 'hsl(210, 10%, 98%)', //Lighter gray
        }, 
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  css: ['~/assets/css/main.css'],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(255,56,92,0.6),rgba(0,0,0,0.4),rgba(0,0,0,0.0)), url('/images/login.jpeg')",
        'no-pattern': "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,1))"
      },
    },
  },
  plugins: [],
}


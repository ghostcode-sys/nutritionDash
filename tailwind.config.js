/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    colors: {
      "black":"#101317",
      'blue': '#03C7FC',
      'pink': '#F45C84',
      'yellow': '#F5C90F',
      'gray-dark': '#36F5C7',
      'gray': '#1E262F',
      'green': '#7FD18C',
      'white':'#FFFFFF',
      'red': '#CC3838',
      // 'purple': '#7e5bef',
      // 'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      boxShadow: {
        'cs': '2px 2px 5px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

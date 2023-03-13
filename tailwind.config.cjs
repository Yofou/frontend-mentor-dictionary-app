/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  darkMode: 'class',
  theme: {
	  colors: {
		  black: {
			  1500: '#050505',
			  1200: '#1F1F1F',
			  900: '#2D2D2D',
			  600: '#3A3A3A',
			  300: '#757575',
		  },
		  white: {
			  full: '#FFF',
			  600: '#F4F4F4',
			  300: '#E9E9E9',
		  },
		  purple: '#A445ED',
		  red: '#FF5252',
	  },
	  fontFamily: {
		  inter: ['Inter', 'sans-serif'],
		  lora: ['Lora', 'sans-serif'],
		  inconsolata: ['Inconsolata', 'sans-serif'],
	  }
  },
  plugins: [],
}

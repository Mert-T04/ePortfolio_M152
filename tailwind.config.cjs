const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  
	plugins: [require('flowbite/plugin')],
  
	darkMode: 'class',
  
	theme: {
	  extend: {
		colors: {
		  // flowbite-svelte
		  primary: {
			50: '#0053FA',
			100: '#0053FA',
			200: '#0053FA',
			300: '#0053FA',
			400: '#0053FA',
			500: '#0053FA',
			600: '#0053FA',
			700: '#0053FA',
			800: '#0053FA',
			900: '#0053FA'
		  }
		}
	  }
	}
  };
  
  module.exports = config;
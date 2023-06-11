/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				monza: {
					50: '#fff0f2',
					100: '#ffe2e6',
					200: '#ffc9d3',
					300: '#ff9db0',
					400: '#ff6686',
					500: '#ff3060',
					600: '#f10d4c',
					700: '#d10442',
					800: '#ab063e',
					900: '#92093b',
					950: '#52001b'
				}
			},
			fontFamily: {
				'anton': ['Anton', 'sans-serif']
			  }
		}
	},
	plugins: [require('tailwind-scrollbar')],
};

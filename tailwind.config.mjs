import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#F7EBFF', // Lighter purple
				'secondary': '#B983FF', // Lighter medium purple
				'accent': '#A259FF', // Lighter dark purple
				'text': '#8247E5', // Lighter deep purple for text
				'dk-primary': '#3D1E67', // Lighter dark purple
				'dk-secondary': '#B983FF', // Lighter secondary dark purple
				'dk-accent': '#8C52FF', // Lighter accent dark purple
				'dk-text': '#D3A9FF', // Lighter light purple text for dark mode
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}

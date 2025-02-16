import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#e0d0c0', // White
				'secondary': '#000000', // Light gray
				'accent': '#FFFFFF', // Medium gray
				'text': '#000000', // Black text
				'dk-primary': '#1e1f29', // Darker Background
				'dk-secondary': '#6272a4', // Dracula Comment/Secondary
				'dk-accent': '#8be9fd', // Dracula Cyan
				'dk-text': '#6272a4', // Dracula White Text
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}

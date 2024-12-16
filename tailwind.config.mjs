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
				'dk-primary': '#1a1a1a', // Black for dark mode
				'dk-secondary': '#FFFFFF', // Dark gray for dark mode
				'dk-accent': '#FFFFFF', // Lighter dark gray for accent
				'dk-text': '#FFFFFF', // White text for dark mode
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}

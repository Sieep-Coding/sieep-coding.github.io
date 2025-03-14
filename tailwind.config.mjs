import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#e8d8c8',
				'secondary': '#202020',
				'accent': '#FFFFFF',
				'text': '#202020',
				'dk-primary': '#2a2b39', 
				'dk-secondary': '#7c8fd1',
				'dk-accent': '#aff6ff',
				'dk-text': '#96a6e2',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}

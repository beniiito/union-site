/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Helvetica', 'Arial', 'sans-serif'],
				'serif': ['Georgia', 'Cambria'],
				'mono': ['SFMono-Regular', 'Menlo'],
				'display': ['Oswald'],
				'body': ['Open Sans'],
			}
		},


	},
	plugins: [require("tw-elements/dist/plugin.cjs")],


}

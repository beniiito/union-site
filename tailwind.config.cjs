/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	theme: {
		extend: {},
		colors: {
				"zapoteca": {
				50: "#DBEEFF",
				100: "#B8DEFF",
				200: "#70BCFF",
				300: "#2499FF",
				400: "#0075DB",
				500: "#004E94",
				600: "#003F75",
				700: "#002E57",
				800: "#00213D",
				900: "#00101F",
				950: "#00080F"
				},
				"blanco": {
					50: "#FFFFFF",
					100: "#FFFFFF",
					200: "#FFFFFF",
					300: "#FFFFFF",
					400: "#FFFFFF",
					500: "#FFFFFF",
					600: "#CCCCCC",
					700: "#999999",
					800: "#666666",
					900: "#333333",
					950: "#1A1A1A"
				  },
				  "verde": {
					50: "#DFFBF8",
					100: "#C0F7F0",
					200: "#80EFE2",
					300: "#46E7D4",
					400: "#1ACBB7",
					500: "#128C7E",
					600: "#0F7165",
					700: "#0B564D",
					800: "#073631",
					900: "#031B18",
					950: "#020E0C"
				  },
				  "naranja": {
					50: "#FFF4F0",
					100: "#FFE5DB",
					200: "#FFCBB8",
					300: "#FFB094",
					400: "#FF9A75",
					500: "#FF7F50",
					600: "#FF4F0F",
					700: "#C73500",
					800: "#852300",
					900: "#421200",
					950: "#240A00"
				  },
				  "negro": {
					50: "#E6E6E6",
					100: "#CCCCCC",
					200: "#999999",
					300: "#666666",
					400: "#333333",
					500: "#000000",
					600: "#000000",
					700: "#000000",
					800: "#000000",
					900: "#000000",
					950: "#000000"
				  },
				  "oro": {
					50: "#FFFBE5",
					100: "#FFF7CC",
					200: "#FFF099",
					300: "#FFE866",
					400: "#FFE033",
					500: "#FFD700",
					600: "#CCAD00",
					700: "#998200",
					800: "#665700",
					900: "#332B00",
					950: "#191600"
				  },
				  "beige": {
					50: "#FEFEFB",
					100: "#FDFDF7",
					200: "#FAFAEF",
					300: "#F9F9EB",
					400: "#F7F7E3",
					500: "#F5F5DC",
					600: "#E0E094",
					700: "#CCCC4C",
					800: "#8F8F29",
					900: "#474714",
					950: "#24240A"
				  },
				  "marron": {
					50: "#FBEBE0",
					100: "#F6D7C0",
					200: "#EEAF81",
					300: "#E68947",
					400: "#CA641C",
					500: "#8B4513",
					600: "#70380F",
					700: "#552A0C",
					800: "#361B07",
					900: "#1B0D04",
					950: "#0D0702"
				  },
				  "bronce": {
					50: "#FAF2EB",
					100: "#F6E8DB",
					200: "#EBCFB2",
					300: "#E2B88E",
					400: "#D79E65",
					500: "#CD853F",
					600: "#AA6B2C",
					700: "#815222",
					800: "#553616",
					900: "#2D1C0C",
					950: "#140D05"
				  },
				  "crema": {
					50: "#FEFDFB",
					100: "#FEFDFB",
					200: "#FCFAF2",
					300: "#FBF9EE",
					400: "#FAF7EA",
					500: "#F9F5E3",
					600: "#E8D996",
					700: "#D7BD46",
					800: "#9B8521",
					900: "#504411",
					950: "#262008"
				  },
				  "oliva": {
					50: "#F2F7F2",
					100: "#E9F2E9",
					200: "#D2E4D2",
					300: "#BCD7BC",
					400: "#A6CAA6",
					500: "#8FBC8F",
					600: "#66A366",
					700: "#4A7C4A",
					800: "#325332",
					900: "#192919",
					950: "#0B130B"
				  },
				  "violeta": {
					50: "#F5EBFF",
					100: "#EBD6FF",
					200: "#D8ADFF",
					300: "#C485FF",
					400: "#B05CFF",
					500: "#9B30FF",
					600: "#7E00F5",
					700: "#5F00B8",
					800: "#3F007A",
					900: "#20003D",
					950: "#10001F"
				  }
 		}
		
	},
	plugins: [require("tw-elements/dist/plugin.cjs")],
	
	
}
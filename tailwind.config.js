/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "375px",
			xxl: "1440px",
		},
		extend: {
			colors: {
				"soft-blue": "hsl(215, 51%, 70%)",
				cyan: "hsl(178, 100%, 50%)",
				"dark-blue-main": "hsl(217, 54%, 11%)",
				"dark-blue-card": "hsl(216, 50%, 16%)",
				"dark-blue-line": "hsl(215, 32%, 27%)",
			},
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [],
};

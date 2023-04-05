/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"U-bold": ["Ubuntu-bold"],
				"U-reg": ["Ubuntu-regular"],
				"U-medium": ["Ubuntu-medium"],
			},
		},
	},
	plugins: [],
};

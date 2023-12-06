/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
				  "0%": {
					width: "0%",
					visibility: "hidden"
				  },
				  "100%": {
					width: "100%"
				  }  
				},
				blink: {
						"50%": {
							borderColor: "transparent"
						},
						"90%": {
							borderColor: "white"
						},
						"100%": {
							borderColor: "transparent",
							animationPlayState:"paused"
						}
					}
			  },
			  animation: {
					typing: "typing 3s, blink .2s infinite"
			  }
		}
	}
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ['./src/**/*.{ts,tsx}'],
	plugins: [],
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
				  "100%": {
					borderColor: "white"
				  }  
				}
			  },
			  animation: {
				typing: "typing 3s infinite alternate, blink .2s infinite"
			  }
		}
	}
};

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {

            scale: {
                "flip": "-1",
            },

            fontFamily: {

                "tabler": ["Tabler"],

                "sans": [
                    "system-ui",
                    "BlinkMacSystemFont",
                    "-apple-system",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],

                "serif": [
                    "Constantia",
                    "Lucida Bright",
                    "Lucidabright",
                    "Lucida Serif",
                    "Lucida",
                    "DejaVu Serif",
                    "Bitstream Vera Serif",
                    "Liberation Serif",
                    "Georgia",
                    "serif",
                ],

                "mono": [
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace",
                ],
	
				'inter': ['Inter'],
				'inter-bold': ['Inter Bold'],
				'inter-extra-bold': ['Inter Extra Bold'],
				'inter-black': ['Inter Black'],
				'inter-light': ['Inter Light'],
				'inter-thin': ['Inter Thin'],

            },

            backgroundSize: {
                "size-90": "90% 90%",
                "size-100": "100% 100%",
                "size-200": "200% 200%",
                "size-300": "300% 300%",
                "size-400": "400% 400%",
                "size-500": "500% 500%",
                "size-600": "600% 600%",
            },

            backgroundPosition: {
                "pos-0": "0% 0%",
                "pos-10": "10% 10%",
                "pos-20": "20% 20%",
                "pos-30": "30% 30%",
                "pos-40": "40% 40%",
                "pos-50": "50% 50%",
                "pos-60": "60% 60%",
                "pos-70": "70% 70%",
                "pos-80": "80% 80%",
                "pos-90": "90% 90%",
                "pos-100": "100% 100%",
            },

            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            colors: {

				"primary": "#7C1FF1",
				"darker": "#13151a",
				"lighter": "#edf0f3",
				"discord": "#404eed",

            },

        },
    },
    plugins: [
        require("tailwind-scrollbar")({ nocompatible: true })
    ],
}
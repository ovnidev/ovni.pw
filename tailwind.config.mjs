/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {

			animation: {
				"spin-slower": "spin 35s ease infinite",
				"spin-slow": "spin 25s ease-in-out infinite reverse",
				"pulse": "pulse 30s ease-in infinite",
			},

			scale: {
				"flip": '-1',
			},

			fontFamily: {

				'tabler': ['Tabler'],

				'sans': [
					'system-ui',
					'BlinkMacSystemFont',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans-serif',
				],
	
				'serif': [
					'Constantia',
					'Lucida Bright',
					'Lucidabright',
					'Lucida Serif',
					'Lucida',
					'DejaVu Serif',
					'Bitstream Vera Serif',
					'Liberation Serif',
					'Georgia',
					'serif',
				],
	
				'mono': [
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace',
				],
	
				'inter': ['Inter'],
				'inter-bold': ['Inter Bold'],
				'inter-extra-bold': ['Inter Extra Bold'],
				'inter-black': ['Inter Black'],
				'inter-light': ['Inter Light'],
				'inter-thin': ['Inter Thin'],

			},

			backgroundSize: {
				'size-90': '90% 90%',
				'size-100': '100% 100%',
				'size-200': '200% 200%',
                'size-300': '300% 300%',
                'size-400': '400% 400%',
                'size-500': '500% 500%',
                'size-600': '600% 600%',
            },

            backgroundPosition: {
                'pos-0': '0% 0%',
				'pos-10': '10% 10%',
				'pos-20': '20% 20%',
				'pos-30': '30% 30%',
				'pos-40': '40% 40%',
				'pos-50': '50% 50%',
				'pos-60': '60% 60%',
				'pos-70': '70% 70%',
				'pos-80': '80% 80%',
				'pos-90': '90% 90%',
                'pos-100': '100% 100%',
            },

			colors: {

				'primary': '#7C1FF1',
				'darker': '#13151a',
				'lighter': '#edf0f3',
				'discord': '#404eed',

				'lavende': {
					'100': '#f3ecfb',
					'200': '#e9dcf8',
					'300': '#d8c0f2',
					'400': '#bf97e9',
					'500': '#b180e1',
					'600': '#9150cd',
					'700': '#7b3eb2',
					'800': '#683792',
					'900': '#552d76',
				},

				'pinked': {
					'50': '#fff4fe',
					'100': '#ffe8fe',
					'200': '#ffcffc',
					'300': '#fd9bf0',
					'400': '#fb77e7',
					'500': '#f243d8',
					'600': '#d623b8',
					'700': '#b11a94',
					'800': '#911778',
					'900': '#761961',
				},

			},

		},
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
}

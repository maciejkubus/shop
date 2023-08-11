import { join } from 'path'
import forms from '@tailwindcss/forms'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			spacing: {
				'site': 'var(--site-width)'
			},
			maxWidth: {
				'site': 'var(--site-width)'
			},
			colors: {
				'spotify': '#1FDF64',
				'soundcloud': '#FF5500',
				'youtube': '#FF0000',
				'facebook': '#3B5998',
				'instagram': '#E1306C',
			},
			backgroundImage: {
				'img-slider-1': 'url(/images/slider1.jpg)',
				'img-slider-2': 'url(/images/slider2.jpg)',
			}
		},
	},
	plugins: [forms,...skeleton()],
}

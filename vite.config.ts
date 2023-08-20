import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import react from '@vitejs/plugin-react'

export default defineConfig({
	build: {
		outDir: '../dist'
	},
	plugins: [
		react(),
		viteStaticCopy({
		  targets: [
			{
			  src: 'images',
			  dest: 'images'
			}
		  ]
		})
	],
	root: 'src',
	server: {
		port: 3000,
	}
})

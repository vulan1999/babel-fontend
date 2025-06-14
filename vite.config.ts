import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		proxy: {
			'/api': { // Any request to your Svelte dev server starting with /api
				target: 'http://localhost:8080', // Will be forwarded to your Go backend
				changeOrigin: true, // Needed for virtual hosted sites
			},
		},
	},
});

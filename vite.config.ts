import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(async () => {
	return {
		plugins: [await sveltekit()],
		server: {
			fs: {
				allow: ['styled-system'],
			},
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	}
});

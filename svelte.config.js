import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@styled-system': './styled-system/*',
			'@src': './src/*',
		},
		typescript: {
			config: (config) => {
				config.include.push('../styled-system');
				return config;
			},
		}
	}
};

export default config;

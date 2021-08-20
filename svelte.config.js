/** @type {import('@sveltejs/kit').Config} */

import { resolve } from 'path';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					components: resolve('./src/components'),
					src: resolve('./src'),
					utils: resolve('./src/utils')
				}
			},
			optimizeDeps: {
				include: ['ual-anchor', 'ual-plainjs-renderer', '@eosdacio/ual-wax', 'eosjs']
			}
		}
	}
};

export default config;

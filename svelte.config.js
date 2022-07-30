import { adapter } from 'sveltekit-adapter-aws';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			layout: {
				misc: './src/routes/layout-misc.svelte'				
			}
		}),
		preprocess()
	],
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'cloud-driven.mikebild.com',
			stackName: 'www-cloud-driven'
		})
	}
};

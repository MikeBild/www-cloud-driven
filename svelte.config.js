import { fileURLToPath } from 'url';
import { adapter } from 'sveltekit-adapter-aws';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			layout: {
				misc: `${fileURLToPath(new URL('.', import.meta.url))}/src/routes/layout-misc.svelte`
			}
		}),
		preprocess()
	],
	kit: {
		prerender: {
			default: true,
			onError: 'continue'
		},
		adapter: adapter({
			autoDeploy: true,
			cdkProjectPath: `${process.cwd()}/deploy.js`
		})
	}
};

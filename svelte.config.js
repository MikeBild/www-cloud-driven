import { fileURLToPath } from 'url';
import { adapter } from 'sveltekit-adapter-aws';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			layout: {
				misc: `${__dirname}/src/routes/layout-misc.svelte`
			}
		}),
		preprocess()
	],
	kit: {
		adapter: adapter({
			autoDeploy: true,
			cdkProjectPath: `${__dirname}/deploy.js`
		})
	}
};

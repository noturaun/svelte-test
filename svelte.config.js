import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: preprocess(),
	kit: {
		// adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;

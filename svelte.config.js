import pkg from './package.json' assert { type: 'json' };
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
			fallback: '200.html' // fallback page
        }),
    },
    vite: {
        ssr: {
            noExternal: Object.keys(pkg.dependencies || {})
        }
    },
    preprocess: vitePreprocess()
};

export default config;

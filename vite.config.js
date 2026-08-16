import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'japans-goods-e-store';

// https://vite.dev/config/
export default defineConfig({
	base: `/${repoName}/`,
	plugins: [react()],
});

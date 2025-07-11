
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'home/darrin/adflix', // Custom build output path
    assetsDir: 'assets', // Custom assets directory
  },
  base: '/my-app/' // Custom base path for deployment
});
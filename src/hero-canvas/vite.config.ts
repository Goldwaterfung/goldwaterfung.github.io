import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../../assets'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'Hero3D',
      formats: ['es'],
      fileName: () => 'hero-3d.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'hero-3d.js',
      },
    },
    minify: 'esbuild',
    target: 'esnext',
  },
  esbuild: {
    legalComments: 'none',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});

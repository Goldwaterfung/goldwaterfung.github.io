import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, '../../assets'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/splat-viewer/main.ts'),
      name: 'SplatViewer',
      formats: ['es'],
      fileName: () => 'splat-viewer.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'splat-viewer.js',
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

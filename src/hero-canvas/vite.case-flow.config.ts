import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../../assets'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/case-flow/main.tsx'),
      name: 'CaseFlow',
      formats: ['iife'],
      fileName: () => 'case-flow.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'case-flow.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'case-flow.css';
          }
          return 'case-flow-[name].[ext]';
        },
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

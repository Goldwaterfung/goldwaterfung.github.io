import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../../assets'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/shader-graph/main.tsx'),
      name: 'ShaderGraph',
      formats: ['es'],
      fileName: () => 'shader-graph.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'shader-graph.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'shader-graph.css';
          }
          return 'shader-graph-[name].[ext]';
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

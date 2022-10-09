import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as styleImport from 'vite-plugin-style-import'
import pkg from './package.json';
// https://vitejs.dev/config/
export default defineConfig({
  base: (new URL(pkg.homepage)).pathname,
  server: {
    port: 3009
  },
  plugins: [styleImport.createStyleImportPlugin({
    libs: [
      {
        libraryName: 'antd',
        esModule: true,
        resolveStyle: (name) => {
          return `antd/es/${name}/style/index`
        },
      },
    ],
  }), react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});

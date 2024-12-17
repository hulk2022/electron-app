import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log('__dirname', __dirname);
//引入Element Plus
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
  },
  renderer: {
    envDir: path.resolve(__dirname, './env'),
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@store': resolve('src/renderer/src/store'),
        '@views': resolve('src/renderer/src/views'),
        '@router': resolve('src/renderer/src/router'),
        '@components': resolve('src/renderer/src/components'),
        '@utils': resolve('src/renderer/src/utils'),
        '@api': resolve('src/renderer/src/api'),
        '@interface': resolve('src/renderer/src/interface'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@layout': resolve('src/renderer/src/layout'),
        '@mixins': resolve('src/renderer/src/mixins'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://10.10.90.221:18080',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});

import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ViteRequireContext from '@originjs/vite-plugin-require-context';
import envCompatible from 'vite-plugin-env-compatible';
import { createHtmlPlugin } from 'vite-plugin-html';
import { visualizer } from "rollup-plugin-visualizer";

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const resolve = (dir) => {
    return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src')
      }
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  plugins: [
    vue(),
    vueJsx(),
    ViteRequireContext(),
    envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'vn-admin'
        }
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve('src/icon/svg')],
      symbolId: 'icon-[name]'
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    visualizer()
  ],
  base: '/',
  server: {
    host: '0.0.0.0'
  }
})

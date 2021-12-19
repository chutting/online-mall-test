import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import createVitePluginImport from 'vite-plugin-import'
import createReactRefreshPlugin from '@vitejs/plugin-react-refresh'

const baseConfig = defineConfig({
  plugins: [
    createReactRefreshPlugin(),
    createVitePluginImport({
      onlyBuild: false,
      babelImportPluginOptions: [
        {
          style: true,
          libraryName: 'antd',
          libraryDirectory: 'es',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})

export default (mode) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    ...baseConfig,
    base: '/',
    server: {
      proxy: {
        '/online-mall': {
          target: process.env.VITE_URL,
          changeOrigin: true,
        },
      },
    },
  })
}

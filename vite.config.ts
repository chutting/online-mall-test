import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import createReactRefreshPlugin from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'
import createVitePluginImport from 'vite-plugin-import'

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
    react(),
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

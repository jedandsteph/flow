import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],

  // GitHub Pages: i-set ang DEPLOY_TARGET=gh-pages habang nagbu-build.
  // Vercel/Netlify/local: babalik sa '/'.
  base: process.env.DEPLOY_TARGET === 'gh-pages'
    ? '/your-repo-name/' // <-- palitan ng eksaktong pangalan ng GitHub repo mo
    : '/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../docs',  // Build to docs folder in project root
    emptyOutDir: true,
    assetsDir: 'assets',
  },
  
  // Configure base path for GitHub Pages
  base: '/UrduGlue.github.io/',  // Replace 'uglue' with your actual repository name
})
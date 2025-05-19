import { defineConfig } from 'vite'

export default defineConfig({
  // Base path - leave as '/' for Netlify
  base: '/',
  
  // Build configuration
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
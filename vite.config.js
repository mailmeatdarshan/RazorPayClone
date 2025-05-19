// import { defineConfig } from 'vite'

// export default defineConfig({
//   // Base path - leave as '/' for Netlify
//   base: '/',
  
//   // Build configuration
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true,
//   }
// })

import { defineConfig } from 'vite';

export default defineConfig({
    // Base path - leave as '/' for Netlify
    base: './',
    
    // Build configuration
    build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        // Add other entry points if needed
      }
    }
  },
  // Make sure your public assets are being included
  publicDir: 'public'
});
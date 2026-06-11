import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/index': {
        target: 'https://amazon-com-mern.onrender.com',
        changeOrigin: true,
      } ,
      '/product': {
        target: 'https://amazon-com-mern.onrender.com',
        changeOrigin: true,
      } ,
      '/user': {
        target: 'https://amazon-com-mern.onrender.com',
        changeOrigin: true,
      } ,
      '/admin': {
        target: 'https://amazon-com-mern.onrender.com',
        changeOrigin: true,
      } 
    }
  }
})

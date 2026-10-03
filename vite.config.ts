import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'
import Sitemap from 'vite-plugin-sitemap'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://achaiawood.com',
      dynamicRoutes: [] 
    }),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'], // Add other pages here like '/about' if you have them
    })
  ]
})

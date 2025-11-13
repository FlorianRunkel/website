import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['website-3a4z.onrender.com'],
    host: '0.0.0.0',
    port: process.env.PORT || 10000
  }
})

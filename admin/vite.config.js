import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:5174}
     host: true,  // This enables the app to be accessible on your local network, useful for testing.
  },
  build: {
    outDir: 'dist',  // Default is 'dist', change if needed.
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 1. Plugins is an array of functions
  plugins: [
    react(),
    // If you are using the compiler, it stays here
    // babel({ presets: [reactCompilerPreset()] }) 
  ],

  // 2. Base must be OUTSIDE the plugins array
  // Use the exact name of your GitHub Repository
  base: '/weatherApp/', 
})
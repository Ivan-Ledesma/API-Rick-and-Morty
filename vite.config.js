import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "https://Ivan-Ledesma.github.io/React-Vite-Api/",
  plugins: [react()],
})

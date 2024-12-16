console.log('Vite configuration initialized.')
console.log('Plugins:', [react()])import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
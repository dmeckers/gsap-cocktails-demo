import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production'
    ? 'https://dmeckers.github.io/gsap-cocktails-demo' //TODO::use env
    : '/',
  plugins: [react(), tailwindcss()],
}))

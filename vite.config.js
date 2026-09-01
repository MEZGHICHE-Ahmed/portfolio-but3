import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//
// `base` : sur GitHub Pages le site est servi depuis /<dépôt>/, pas depuis la
// racine du domaine. La variable BASE_PATH est renseignée par le workflow de
// déploiement ; en local et sur Vercel elle est absente, et la base reste "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})

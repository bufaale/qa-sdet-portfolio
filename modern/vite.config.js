import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/qa-sdet-portfolio/', // 👈 esto es clave para GitHub Pages
  plugins: [react()]
});

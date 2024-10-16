import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Ohmyfood_React/', 
  plugins: [react()],
});

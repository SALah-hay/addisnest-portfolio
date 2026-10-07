import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react';
export default defineConfig({ plugins:[react()], base:process.env.VITE_BASE_PATH || '/ecommerce/', build:{outDir:'../../dist/ecommerce',emptyOutDir:true} });

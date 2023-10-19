import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      // Configuración adicional de Rollup
      external: ['some-library'], // Especifica bibliotecas que deben tratarse como externas
    },
  },
});

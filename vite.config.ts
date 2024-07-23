import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src/*'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@config': path.resolve(__dirname, './src/config'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hooks/*': path.resolve(__dirname, './src/hooks/*'),
      '@pages/*': path.resolve(__dirname, './src/pages/*'),
      '@styles/*': path.resolve(__dirname, './src/styles/*'),
      '@services/*': path.resolve(__dirname, './src/services/*'),
      '@types/*': path.resolve(__dirname, './src/types/*'),
      '@utils/*': path.resolve(__dirname, './src/utils/*'),
    },
  },
});

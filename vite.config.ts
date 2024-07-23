import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@config': `${path.resolve(__dirname, './src/config')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks')}`,
      '@pages': `${path.resolve(__dirname, './src/pages')}`,
      '@services': `${path.resolve(__dirname, './src/services')}`,
      '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@types': `${path.resolve(__dirname, './src/types')}`,
      '@utils': `${path.resolve(__dirname, './src/utils')}`,

      /* Components */
      '@buttons': `${path.resolve(__dirname, './src/components/buttons')}`,
      '@cards': `${path.resolve(__dirname, './src/components/cards')}`,
      '@images': `${path.resolve(__dirname, './src/components/images')}`,
      '@navs': `${path.resolve(__dirname, './src/components/navs')}`,
      '@selects': `${path.resolve(__dirname, './src/components/selects')}`,
    },
  },
});

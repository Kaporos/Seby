import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        assetFileNames: (assetInfo) => {
          let split = assetInfo.name.split("/")
          if (assetInfo.name == 'style.css')
            return 'style.css';
          return split[split.length - 1]
        },
      }
    }

  }
})

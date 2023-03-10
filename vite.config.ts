import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as packageJson from "./package.json";

const fileName = "mn_components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
  ],
  build: {
    lib: {
      entry: `src/${fileName}.ts`,
      formats: ["es"],
      fileName: (format) => `${fileName}.mjs`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
    emptyOutDir: false,
  },
})

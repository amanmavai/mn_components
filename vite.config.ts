import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as packageJson from "./package.json";

const packageName = packageJson.name;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
  ],
  build: {
    lib: {
      entry: `src/${packageName}.ts`,
      formats: ["es"],
      fileName: (format) => `${packageName}.mjs`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
    emptyOutDir: false,
  },
})

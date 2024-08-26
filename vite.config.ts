import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: '/https://syke9p3.github.io/mlthsc-react/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
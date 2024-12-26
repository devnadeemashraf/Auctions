import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react()],
});

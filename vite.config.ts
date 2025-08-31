import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/styles",
      "@core": "/src/core",
      "@components": "/src/components",
      "@render": "/src/render",
    },
  },
});

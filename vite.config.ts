import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), glsl()],
  base: "/oldschool-tetris",
  resolve: {
    alias: {
      "@styles": "/src/styles",
      "@core": "/src/core",
      "@components": "/src/components",
      "@render": "/src/render",
      "@store": "/src/store",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@": "/src",
    },
  },
});

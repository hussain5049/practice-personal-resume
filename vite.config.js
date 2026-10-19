import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves the site from /<repo-name>/, so the base must match.
// `npm run build -- --base=/` builds for a custom domain or local preview at root.
export default defineConfig({
  base: "/practice-personal-resume/",
  plugins: [react(), tailwindcss()],
  build: {
    target: "es2020",
    sourcemap: false,
  },
});

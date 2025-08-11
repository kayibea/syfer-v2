import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/syfer-v2",
  resolve: {
    alias: {
      runes: path.resolve("src", "runes"),
      utils: path.resolve("src", "utils"),
      types: path.resolve("src", "types"),
      constants: path.resolve("src", "constants"),
    },
  },
});

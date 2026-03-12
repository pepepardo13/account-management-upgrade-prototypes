import { resolve } from "node:path";

import { defineConfig } from "vite";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  build: {
    outDir: "dist-standalone",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "option-a-alt": resolve(__dirname, "standalone/option-a-alt.html"),
        "option-b-alt": resolve(__dirname, "standalone/option-b-alt.html"),
        "option-c-alt": resolve(__dirname, "standalone/option-c-alt.html"),
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The blueprint markdown files live one directory above this app
// (./planmysaas-blueprint/*.md), so both the dev server and the
// production build need permission to read outside this folder.
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [".."],
    },
  },
});

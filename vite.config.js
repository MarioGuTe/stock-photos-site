import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //  change default server 5173 to server 3000
  server: {
    port: 3000,
  },
});

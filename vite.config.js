import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // host: '192.168.0.12',
    host: '0.0.0.0',
    port: 5172,
    strictPort: true,
    allowedHosts: ['react.fhn.my.id'] // tambahkan domain kamu di sini
  }
})
// import { defineConfig } from "vite";
//   import react from "@vitejs/plugin-react";

//   // https://vitejs.dev/config/
//   export default defineConfig({
//       plugins: [react()],
//   });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["j6ch8v-5173.csb.app"], // 👈 add your sandbox domain here
  },
});

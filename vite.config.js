import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://rebaibenatallah.github.io/react-project/",
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Tambahkan baris di bawah ini agar import Supabase lurus ke folder luar:
      "@/integrations/supabase/client": path.resolve(__dirname, "./supabase/functions/_shared/client.ts"), 
    },
  },
});
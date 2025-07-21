import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
// Removed lovable-tagger import

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Removed componentTagger()
    viteCompression(),
    visualizer({ open: true })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: [
      "i18next",
      "react-i18next"
      // Removed 'react' and 'react-dom/client' to fix ESM import issues
    ],
    // Include void-elements to fix ESM/CommonJS import issues
    include: [
      "void-elements"
    ]
  },
}));

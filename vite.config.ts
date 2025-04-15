import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Define componentTagger function if you're using it
const componentTagger = () => ({
  name: 'component-tagger',
  // Add your component tagger logic here
});

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: '/chandana_shastri/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'uploads', // Changed from 'assets' to 'uploads' to match your structure
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep the original file names in the uploads directory
          if (assetInfo.name.match(/\.(png|jpe?g|svg|heic)$/i)) {
            return 'uploads/[name].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        }
      }
    }
  },
  publicDir: 'public', // This will include your uploads folder
}));
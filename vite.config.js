import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Allow external access (needed for Render)
    port: process.env.PORT || 10000, // Use Render's port or default to 10000
  },
  preview: {
    port: process.env.PORT || 10000, // Ensure the preview runs on Render's port
  },
});

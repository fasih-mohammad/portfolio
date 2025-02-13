import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: "0.0.0.0",
    port: 10000, // Ensure this matches your Render port
    allowedHosts: ["portfolio-oq7s.onrender.com"], // Add your Render domain here
  },
});

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
const baseUrl ="/records_gym/";
export default defineConfig({
  base: `${baseUrl}`,
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Record Gym App",
        short_name: "RecordGymApp",
        theme_color: "#522633",
        icons: [
          {
            src: `${baseUrl}assets/images/logos/android-chrome-36x36.png`,
            sizes: "36x36",
            type: "image/png",
          },
          {
            src: `${baseUrl}assets/images/logos/android-chrome-48x48.png`,
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: `${baseUrl}assets/images/logos/android-chrome-72x72.png`,
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: `${baseUrl}assets/images/logos/android-chrome-96x96.png`,
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: `${baseUrl}assets/images/logos/android-chrome-144x144.png`,
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: `${baseUrl}assets/images/logos/android-chrome-192x192.png`,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: `${baseUrl}assets/images/logos/android-chrome-256x256.png`,
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: `${baseUrl}assets/images/logos/android-chrome-512x512.png`,
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

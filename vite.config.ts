import electron from "vite-plugin-electron/simple";
import react from "@vitejs/plugin-react";

export default {
  plugins: [
    react(),
    electron({
      main: {
        entry: "electron/main.ts",
      },
      preload: {
        input: "electron/preload.ts",
      },
      renderer: {},
    }),
  ],
};

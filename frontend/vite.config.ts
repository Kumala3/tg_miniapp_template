import { fileURLToPath, URL } from "node:url";

import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        watch: {
            usePolling: true
        },
    },
    plugins: [react() as PluginOption],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)) as string
        },
    },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	define: {
		"process.env": {},
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "./src"),
		},
	},
	base: "./",
});

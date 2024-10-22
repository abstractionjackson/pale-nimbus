import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const config = {
    base: "/pale-nimbus/",
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/index.js"),
        name: "Pale Nimbus",
        fileName: "pale-nimbus",
        formats: ["es"],
      },
    },
  };
  if (mode === "demo") {
    return {
      ...config,
      root: "demo",
      build: {
        outDir: resolve(__dirname, "docs"),
        emptyOutDir: true,
      },
    };
  }
  if (mode === "development") {
    return {
      ...config,
      root: "demo",
      server: {
        port: 3000,
        open: true,
      },
    };
  }
  return config;
});

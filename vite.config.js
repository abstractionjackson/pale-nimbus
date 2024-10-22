import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const config = {
    base: "/pale-nimbus/",
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/BusinessCard/index.js"),
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
  return config;
});

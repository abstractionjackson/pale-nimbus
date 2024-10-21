import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const config = {
    base: "/pale-nimbus",
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/index.js"),
        name: "Pale Nimbus",
        fileName: "pale-nimbus",
        formats: ["es", "umd"],
      },
    },
  };
  if (mode === "development" || mode === "demo") {
    config.root = "demo";
  }
  if (mode === "demo") {
    config.build.outDir = "../docs";
    config.emptyOutDir = true;
    config.server = {
      port: 3000,
    };
  }
  return config;
});

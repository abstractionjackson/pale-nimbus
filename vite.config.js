import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  if (mode === "demo") {
    return {
      root: "demo", // demo site as the root during build
      build: {
        outDir: "../docs", // Output the demo site to 'docs' for GitHub Pages
        emptyOutDir: true, // Clean the output directory before building
      },
    };
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/BusinessCard/index.js"),
        name: "BusinessCardLibrary",
        fileName: "pale-nimbus",
        formats: ["es", "umd"], // Output in both ES and UMD formats
      },
      rollupOptions: {
        // Any Rollup options you need (e.g., external libraries)
      },
      outDir: "dist", // Output library build to 'dist'
      emptyOutDir: true, // Clean the 'dist' folder before building
    },
  };
});

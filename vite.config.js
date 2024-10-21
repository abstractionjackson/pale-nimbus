import { resolve } from "path";

export default {
  base: "/pale-nimbus",
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.js"),
      name: "Pale Nimbus",
      fileName: "pale-nimbus",
    },
  },
};

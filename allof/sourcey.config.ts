import { defineConfig, markdown, openapi } from "sourcey";

export default defineConfig({
  name: "allOf",
  theme: {
    preset: "default",
  },
  navigation: {
    tabs: [
      {
        tab: "API Reference",
        slug: "api",
        source: openapi("./spec.yaml")
      },
    ],
  },
});

import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TANGENNT's Blog",
  description: "Keep learning and get hands dirty!",
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: "TypeScript",
        items: [
          { text: "IsUnion", link: "/TypeScript/is-union" },
          { text: "RemoveIndexSignature", link: "/TypeScript/remove-index-signature" },
        ],
      },
    ],
  },
});

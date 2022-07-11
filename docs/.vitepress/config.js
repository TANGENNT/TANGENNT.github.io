import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TANGENNT's Blog",
  description: "Keep learning and get hands dirty!",
  lastUpdated: true,
  themeConfig: {
    sidebar: [{ text: "TypeScript", items: [{ text: "isUnion", link: "/TypeScript/is-union" }] }],
  },
});

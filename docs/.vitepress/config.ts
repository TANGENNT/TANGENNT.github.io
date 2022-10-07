import { defineConfig } from "vitepress";
import { createNav, createSidebar } from "./utils";

export default defineConfig({
  title: "TANGENNT's Blog",
  description: "Keep learning and get hands dirty!",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/TANGENNT/TANGENNT.github.io/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: createNav(),
    sidebar: createSidebar(),
  },
});

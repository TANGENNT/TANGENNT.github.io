import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TANGENNT's Blog",
  description: "Keep learning and get hands dirty!",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/TANGENNT/TANGENNT.github.io/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      {
        text: "Frontend",
        items: [
          {
            text: "TypeScript",
            link: "/frontend/typescript/index.md",
            items: [
              {
                text: "type challenge",
                link: "/frontend/typescript/type-challenges/index.md",
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/frontend/typescript/": [
        {
          text: "type challenge",
          collapsible: true,
          items: [
            { text: "IsUnion", link: "/frontend/typescript/type-challenges/is-union.md" },
            {
              text: "RemoveIndexSignature",
              link: "/frontend/typescript/type-challenges/remove-index-signature.md",
            },
          ],
        },
      ],
    },
  },
});

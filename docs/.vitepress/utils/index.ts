import path from "path";
import { readdirSync, statSync } from "fs";
import type { DefaultTheme } from "vitepress";

export function pascalize(filename: string, splitter: string = "-") {
  return filename
    .split(splitter)
    .map((segment) => `${segment[0].toUpperCase()}${segment.slice(1)}`)
    .join("");
}

export function readDirName(dirPath: string) {
  return readdirSync(dirPath).filter(
    (dir) =>
      !dir.startsWith(".") &&
      statSync(path.resolve(dirPath, dir)).isDirectory() &&
      readdirSync(path.resolve(dirPath, dir)).length
  );
}

export function createNav() {
  return readDirName(path.resolve("docs")).map((navItemName) => ({
    text: pascalize(navItemName),
    items: readDirName(path.resolve("docs", navItemName)).map(
      (subNavItemName) => ({
        text: pascalize(subNavItemName),
        link: `/${navItemName}/${subNavItemName}/index.md`,
        items: readDirName(
          path.resolve("docs", navItemName, subNavItemName)
        ).map((sidebarItemName) => {
          const text = pascalize(sidebarItemName);
          const link = `/${navItemName}/${subNavItemName}/${sidebarItemName}/index.md`;
          return { text, link };
        }),
      })
    ),
  }));
}

export function createSidebar() {
  const sidebar: Record<string, DefaultTheme.Sidebar> = {};
  readDirName(path.resolve("docs")).forEach((navItemName) => {
    readDirName(path.resolve("docs", navItemName)).forEach((subNavItemName) => {
      const sidebarArr: DefaultTheme.Sidebar = (sidebar[
        `/${navItemName}/${subNavItemName}/`
      ] = []);
      readDirName(path.resolve("docs", navItemName, subNavItemName)).forEach(
        (sidebarItemName) => {
          sidebarArr.push({
            text: pascalize(sidebarItemName),
            collapsible: true,
            items: readdirSync(
              path.resolve("docs", navItemName, subNavItemName, sidebarItemName)
            ).map((filename) => ({
              text: pascalize(filename),
              link: `/${navItemName}/${subNavItemName}/${sidebarItemName}/${filename}`,
            })),
          });
        }
      );
    });
  });
  return sidebar;
}

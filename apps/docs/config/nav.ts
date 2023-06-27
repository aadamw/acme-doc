import { type SidebarNavItem } from "@/types/nav";
import { siteConfig } from "./site";

export const navigationConfig = [
  {
    label: "Documentation",
    href: "/docs",
  },
  {
    label: "Examples",
    href: "/examples",
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
  },
];

export const docsNavigationConfig = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      {
        title: "Changelog",
        href: "/docs/changelog",
        items: [],
      },
    ],
  },
] satisfies SidebarNavItem[];

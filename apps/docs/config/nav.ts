import { type SidebarNavItem } from "@/types/nav";
import { siteConfig } from "./site";

export const navigationConfig = [
  {
    label: "Documentation",
    href: "/docs",
  },
  {
    label: "Examples",
    href: "/docs/examples",
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
  {
    title: "Examples",
    items: [
      {
        title: "Introduction",
        href: "/docs/examples",
        items: [],
      },
      {
        title: "Installation",
        href: "/docs/examples/installation",
        items: [],
      },
      {
        title: "Api Reference",
        href: "/docs/examples/api-reference",
        items: [],
      },
    ],
  },
] satisfies SidebarNavItem[];

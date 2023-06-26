import { siteConfig } from "./site";
import * as Icons from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

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
        title: "Installation",
        href: "/docs/installation",
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

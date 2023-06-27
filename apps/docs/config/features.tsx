import * as Icons from "@/components/icons";

export const features = [
  {
    icon: <Icons.component className="h-10 w-10" />,
    title: "UI Package",
    body: (
      <>
        A UI package with all the components you need for your next application.
        Built by the wonderful{" "}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Shadcn
        </a>
        .
      </>
    ),
  },
  {
    icon: <Icons.Mdx className="h-10" />,
    title: "MDX",
    body: (
      <>
        Preconfigured MDX as Server Components. MDX is the best way to write
        contentful pages.
      </>
    ),
  },
  {
    icon: <Icons.ContentLayer className="h-10" />,
    title: "ContentLayer",
    body: (
      <>
        Contentlayer is content SDK that validates and transforms your content
        into type-sage JSON data you can easily import into your application.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Icons.Nextjs className="h-10 w-10" />
      </div>
    ),
    title: "Next.js 13 & React 18",
    body: (
      <>
        Latest features from Next 13 using the brand new App Router with full
        React 18 support including streaming.
      </>
    ),
  },
];

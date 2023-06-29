import { cn } from "@/lib/utils";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import * as Icons from "@/components/icons";
import { Mdx } from "@/components/mdx-components";
import { DocsPager } from "@/components/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

function findDocBySlug(params: DocPageProps["params"]) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  return doc;
}

async function getDocFromParams({ params }: DocPageProps) {
  const doc = findDocBySlug(params);
  if (!doc) return null;
  return doc;
}

export function generateMetadata({ params }: DocPageProps) {
  const doc = findDocBySlug(params);
  if (!doc) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: doc.title };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocsPage(props: DocPageProps) {
  const doc = await getDocFromParams({ params: props.params });

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap select-none">
            Docs
          </div>
          <Icons.chevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground select-none">
            {doc.title}
          </div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
            <ScrollArea className="pb-10">
              <DashboardTableOfContents toc={toc} />
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
}

import { DocsSidebarNav } from "@/components/sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsNavigationConfig } from "@/config/nav";

export default function Home(props: { children: React.ReactNode }) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
          <DocsSidebarNav items={docsNavigationConfig} />
        </ScrollArea>
      </aside>
      {props.children}
    </div>
  );
}

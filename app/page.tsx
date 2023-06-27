import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Balance from "react-wrap-balancer";
import * as Icons from "@/components/icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { features } from "@/config/features";

export default function Home() {
  return (
    <div className="container flex-1 relative">
      <section className="flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 pb-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Bootstrap your docs site with a single command.
        </h1>
        <Balance className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          acme/docs is a production ready docs site. Accessible. Customizable.
          Open Source.
        </Balance>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-medium leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-4">
          {features.map((feature) => (
            <Card key={feature.title} className={cn("p-2")}>
              <CardHeader>{feature.icon}</CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="mt-2">
                  {feature.body}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

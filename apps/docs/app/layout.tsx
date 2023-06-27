import "./globals.css";

import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "acme/docs",
  description: "Production ready docs template for your next side project.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers attribute="class" defaultTheme="theme" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            {props.children}
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}

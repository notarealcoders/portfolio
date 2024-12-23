import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandMenu } from "@/components/command-menu";
import { Analytics } from "@/components/analytics";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TerminalButton } from "@/components/TerminalButton";
import { TerminalProvider } from "@/hooks/use-terminal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A modern developer portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TerminalProvider>
            <div className="relative min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <TerminalButton />
              <CommandMenu />
              <Analytics />
              <Toaster />
            </div>
          </TerminalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineer, Full Stack Developer, and Tech Enthusiast",
  description: "Software Engineer, Full Stack Developer, and Tech Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper className="mx-auto">
            <Navbar />
          </MaxWidthWrapper>
          <hr className="text-gray-600 mb-2" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

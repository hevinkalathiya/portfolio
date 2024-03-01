import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

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
      <body
        className={cn(
          inter.className,
          "dark:bg-background bg-light-background bg-no-repeat"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 "> */}
          <Navbar />
          <hr className="text-blue-200 mb-2" />
          {children}
          <Toaster />
          <Footer />
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

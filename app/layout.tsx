import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";

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
  // const { theme } = useTheme();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          // theme === "dark" ? "" : "bg-none",
          "dark:bg-background bg-no-repeat"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 "> */}
          <Navbar />
          <hr className="text-gray-600 mb-2 border-2" />
          {children}
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

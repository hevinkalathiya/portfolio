import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hevin Kalathiya",
    template: "%s - Hevin Kalathiya",
  },
  description: "Software Engineer, Full Stack Developer, and Tech Enthusiast",
  keywords: "Software, Engineer, Full Stack, Developer, Tech, Enthusiast",
  twitter: {
    site: "@hevin_kalathiya",
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hevin.site",
    images: [
      {
        url: "https://www.hevin.site/_next/image?url=%2Fimages%2Fhero_image.png&w=256&q=100",
        width: 1200,
        height: 630,
        alt: "Hevin Kalathiya",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Include the Google Analytics script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-40XF7QS8M2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-40XF7QS8M2');
            `,
          }}
        ></script>
      </head>
      <body
        className={cn(
          inter.className,
          "dark:bg-background bg-light-background bg-repeat dark:bg-no-repeat"
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
          <hr className="text-blue-200" />
          <Footer />
          <Analytics />
          <SpeedInsights />
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

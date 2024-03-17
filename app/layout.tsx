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
  keywords: "Software, Engineer, Full Stack, Developer, Tech, Enthusiast, Hevin, Kalathiya, Hevin Kalathiya, Hevin Kalathiya Portfolio, Hevin Kalathiya Blog, Hevin Kalathiya Projects, Hevin Kalathiya Work, Hevin Kalathiya Resume, Hevin Kalathiya Contact, Hevin Kalathiya About, Hevin Kalathiya Skills, Hevin Kalathiya Experience, Hevin Kalathiya Education, Hevin Kalathiya Interests, Hevin Kalathiya Hobbies, Hevin Kalathiya Achievements, Hevin Kalathiya Certifications, Hevin Kalathiya Awards, Hevin Kalathiya Publications, Hevin Kalathiya Presentations, Hevin Kalathiya Conferences, Hevin Kalathiya Webinars, Hevin Kalathiya Workshops, Hevin Kalathiya Seminars, Hevin Kalathiya Talks, Hevin Kalathiya Lectures, Hevin Kalathiya Courses, Hevin Kalathiya Books, Hevin Kalathiya Blogs, Hevin Kalathiya Videos, Hevin Kalathiya Podcasts, Hevin Kalathiya Interviews, Hevin Kalathiya Articles, Hevin Kalathiya Projects, Hevin Kalathiya Open Source, Hevin Kalathiya Contributions, Hevin Kalathiya Community, Hevin Kalathiya Socials, Hevin Kalathiya Connect, Hevin Kalathiya Follow, Hevin Kalathiya Subscribe, Hevin Kalathiya Newsletter, Hevin Kalathiya Contact, Hevin Kalathiya Email, Hevin Kalathiya Phone, Hevin Kalathiya Address, Hevin Kalathiya Location, Hevin Kalathiya Map, Hevin Kalathiya Directions, Hevin Kalathiya Hours, Hevin Kalathiya Schedule, Hevin Kalathiya Calendar, Hevin Kalathiya Events, Hevin Kalathiya News, Hevin Kalathiya Updates, Hevin Kalathiya Notifications, Hevin Kalathiya Messages, Hevin Kalathiya Chat, Hevin Kalathiya Support, Hevin Kalathiya Help, Hevin Kalathiya FAQ, Hevin Kalathiya Terms, Hevin Kalathiya Privacy, Hevin Kalathiya Policy, Hevin Kalathiya Legal, Hevin Kalathiya Accessibility, Hevin Kalathiya Sitemap, Hevin Kalathiya XML, Hevin Kalathiya JSON, Hevin Kalathiya RSS, Hevin Kalathiya Atom, Hevin Kalathi",
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

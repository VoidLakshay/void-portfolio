import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/constants/site';
import { SmoothScroll } from '@/providers/SmoothScroll';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://void-portfolio-phi.vercel.app"),

  title: {
    default: "Lakshay Vashisth | Full-Stack Developer",
    template: "%s | Lakshay Vashisth",
  },

  description:
    "I'm Lakshay Vashisth, a developer building modern web applications with Next.js, React, TypeScript, and Node.js. Explore my projects and skills.",

  applicationName: "Lakshay Vashisth Portfolio",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Lakshay Vashisth | Full-Stack Developer",
    description:
      "Explore my projects, technical skills, and work in modern web development.",
    url: "https://void-portfolio-phi.vercel.app/",
    siteName: "Lakshay Vashisth Portfolio",
    locale: "en_US",
    type: "website",
  },

  
twitter: {
  card: "summary_large_image",
  title: "Lakshay Vashisth | Full-Stack Developer",
  description:
    "Explore my portfolio, projects, and skills in modern web development.",
  images: ["/opengraph-image.png"],
},


  robots: {
    index: true,
    follow: true,
  },
};


import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/layout/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <ScrollProgress />
        </ThemeProvider>
      </body>
    </html>
  );
}

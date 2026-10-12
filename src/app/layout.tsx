import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIS — AI-First Technology Partner | Startups & Enterprise Product Engineering",
  description:
    "CIS is the AI-first technology partner behind the next generation of startups and enterprises. We turn ambitious ideas into scalable, intelligent digital products.",
  keywords: [
    "AI Technology Partner",
    "Generative AI",
    "Agentic AI",
    "Product Engineering",
    "Startup Technical Co-founder",
    "Enterprise Modernization",
    "Custom Software Development",
    "Cloud Architecture",
    "CIS",
    "Cyber Infrastructure",
  ],
  authors: [{ name: "CIS (Cyber Infrastructure)" }],
  openGraph: {
    title: "CIS — AI-First Technology Partner",
    description:
      "From first concept to production scale, CIS builds AI-powered products, intelligent platforms and scalable technology.",
    url: "https://www.cisin.com",
    siteName: "CISIN",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CIS — AI-First Technology Partner",
    description:
      "We build what's next. AI-powered products, intelligent platforms and scalable engineering for ambitious founders & enterprises.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#040814] text-slate-100 antialiased font-sans flex flex-col selection:bg-[#f15a24] selection:text-white">
        {children}
      </body>
    </html>
  );
}

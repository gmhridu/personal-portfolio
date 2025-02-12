import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/context/ThemeProvider";
import LangProvider from "@/context/LangContext";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/ThemeSwitcher";
import LanguageSwitch from "@/components/LangSwitcher";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GM Redoy | Portfolio",
  description:
    "GM Redoy is a Full-Stack Developer skilled in React, Node.js, Next.js and TypeScript, dedicated to delivering high-quality digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-gray-50 text-gray-950 relative pt-28 sm:pt-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 "
        )}
      >
        <div className="bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[2rem] h-[50vh] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#905263] 2xl:right-[22rem] 2xl:blur-[20rem] 2xl:top-[-4rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[50vh] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[10rem] dark:bg-[#676394] 2xl:blur-[16rem]"></div>
        <ThemeProvider>
          <LangProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Toaster />
              <ThemeSwitch />
              <LanguageSwitch />
            </ActiveSectionContextProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

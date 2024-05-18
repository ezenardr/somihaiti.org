import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import {ViewTransitions} from "next-view-transitions";
import React from "react";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somi Haiti",
  metadataBase : new URL("https://somihaiti.org"),
  description: "Strengthening communities through health and support services.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
      <ViewTransitions>
        <html lang={locale}>
          <body className={dm_Sans.className}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </body>
        </html>
      </ViewTransitions>
  );
}

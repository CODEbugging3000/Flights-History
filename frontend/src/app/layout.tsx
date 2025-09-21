import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

import { Header } from "../components/header-logo";

const sora = Sora({
  variable: "--font-sora",
  subsets: ['latin']
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Historico de voos",
  description: "Histórico de voos pilops.comg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${sora.variable} ${manrope.variable} justify-center-safe items-center px-20 antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

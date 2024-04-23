import { Footer, Header, WhatsAppButton } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morais & Ribeiro - Advocacia",
  description: "Somos mais do que apenas advogados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-black text-white ${inter.className}`}>
        <Header className="sticky top-0" />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

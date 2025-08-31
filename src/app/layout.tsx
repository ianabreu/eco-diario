import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const montserrat = Montserrat({
  weight: ["500", "700"],
  variable: "--font-montserrat",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoDiário",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased h-svh`}>
        <Header />
        <main className="container p-4 flex flex-col mx-auto transition-all duration-500">
          {children}
        </main>
      </body>
    </html>
  );
}

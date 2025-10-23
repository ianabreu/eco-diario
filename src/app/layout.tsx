import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eco Diário - Educação e Práticas Sustentáveis",
  description:
    "O Eco Diário é um projeto de educação ambiental que une tecnologia e conscientização. Promove práticas sustentáveis, consumo responsável e economia verde para transformar comunidades e incentivar o desenvolvimento sustentável.",
  keywords: [
    "sustentabilidade",
    "economia verde",
    "consumo consciente",
    "reciclagem",
    "meio ambiente",
    "educação ambiental",
    "eco diário",
    "desenvolvimento sustentável",
  ],
  authors: [{ name: "Ian Abreu", url: "https://br.linkedin.com/in/ian-abreu" }],
  openGraph: {
    title: "Eco Diário - Educação e Práticas Sustentáveis",
    description:
      "Descubra o Eco Diário, um projeto que promove sustentabilidade e educação ambiental por meio da tecnologia. Pequenas ações, grandes mudanças!",
    url: "https://eco-diario.vercel.app",
    siteName: "Eco Diário",
    images: [
      {
        url: "https://eco-diario.vercel.app/imagens/og-image-eco-diario.svg",
        width: 1200,
        height: 630,
        alt: "Eco Diário - Sustentabilidade e Educação Ambiental",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Diário - Educação e Práticas Sustentáveis",
    description:
      "Aprenda práticas sustentáveis com o Eco Diário. Educação e tecnologia unidas para um futuro melhor.",
    images: ["https://eco-diario.vercel.app/imagens/og-image-eco-diario.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased overflow-x-hidden`}>
        <Header />
        <main className="container max-w-5xl px-4 flex flex-col mx-auto transition-all duration-500 min-h-[calc(100vh - 64px - 100px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

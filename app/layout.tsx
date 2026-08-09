import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prazo Certo — Controle de Validade de Produtos",
  description:
    "Aplicativo multiplataforma para controlar datas de validade de produtos, com leitor de código de barras, alertas por setor, relatórios em PDF e cadastro por foto com IA. React Native, TypeScript, Expo e Supabase.",
  keywords: [
    "prazo certo",
    "controle de validade",
    "validade de produtos",
    "gestão de estoque",
    "React Native",
    "TypeScript",
    "Expo",
    "Supabase",
    "PostgreSQL",
    "IA generativa",
  ],
  openGraph: {
    title: "Prazo Certo — Controle de Validade de Produtos",
    description:
      "Aplicativo multiplataforma com leitor de código de barras, alertas por setor, relatórios em PDF e cadastro por foto com IA.",
    url: "https://prazo-certo-landing.vercel.app",
    siteName: "Prazo Certo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

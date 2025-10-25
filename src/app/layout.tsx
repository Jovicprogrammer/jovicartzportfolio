import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const minhaFonte = localFont({
  src: [
    {
      path: '../../public/fonts/ZtBrosOskon90s-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--zt-regular', // Opcional para usar com CSS variables
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vesquicio.",
  description: "perdido em um sonho febril",
  icons: {
  icon: 'images/vesquicio-icon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={minhaFonte.className}
      >
        {children}
      </body>
    </html>
  );
}

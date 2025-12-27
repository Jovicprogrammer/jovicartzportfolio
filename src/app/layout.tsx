import type { Metadata } from "next";
import { Oskon } from './fonts';
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
        className={`${Oskon.variable} `}
      >
        {children}
      </body>
    </html>
  );
}

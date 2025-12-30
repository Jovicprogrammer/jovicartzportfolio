import type { Metadata } from "next";
import { Oskon } from './fonts';
import "./globals.css";



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

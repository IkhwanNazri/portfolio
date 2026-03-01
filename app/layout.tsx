import type { Metadata } from "next";
import { Archivo_Black, Plus_Jakarta_Sans } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ikhwan Nazri | Graphic Designer & Web Developer",
  description: "Portfolio of Ikhwan Nazri - Crafting premium digital experiences through minimal design and robust code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${archivoBlack.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

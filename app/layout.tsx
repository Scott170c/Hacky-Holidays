import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  Box,
  Button,
  Container,
  Image,
  Grid,
  Heading,
  Text,
} from 'theme-ui';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",

})

export const metadata: Metadata = {
  title: "Hacky Holidays",
  description: "Limited-time Hack Club PCB Ornament YSWS 🎄",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

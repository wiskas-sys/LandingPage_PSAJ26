import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DIAN MOTOR — Bengkel, Stok & Servis Motor",
    template: "%s | DIAN MOTOR",
  },
  description:
    "DIAN MOTOR adalah bengkel motor dengan sistem manajemen inventori, servis, dan kasir terintegrasi.",
  applicationName: "DIAN MOTOR",
};

export const viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className="dark:bg-background"
      suppressHydrationWarning
    >
      <body
        className={`${geist.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

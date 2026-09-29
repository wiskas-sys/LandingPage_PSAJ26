import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // TODO: ganti data asli
  title: "Dian Motor — Bengkel & Servis Motor Terpercaya",
  description:
    "Dian Motor adalah bengkel motor dengan sistem pencatatan stok ter integrasi. Layanan servis rutin, penggantian komponen, dan penanganan kerusakan kelistrikan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

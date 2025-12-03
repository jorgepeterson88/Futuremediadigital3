import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PT FUTURE MEDIA DIGITAL - Solusi Digital Terpercaya untuk Bisnis Anda",
  description: "Perusahaan profesional bergerak di bidang pengelolaan website, pemasaran digital, dan produksi konten. Transformasikan bisnis Anda dengan solusi digital terdepan.",
  keywords: ["PT FUTURE MEDIA DIGITAL", "website development", "digital marketing", "produksi konten", "solusi digital", "jakarta"],
  authors: [{ name: "PT FUTURE MEDIA DIGITAL" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PT FUTURE MEDIA DIGITAL - Solusi Digital Terpercaya",
    description: "Transformasikan bisnis Anda dengan solusi digital terdepan dari perusahaan terpercaya di Jakarta",
    url: "https://futuremediadigital.com",
    siteName: "PT FUTURE MEDIA DIGITAL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT FUTURE MEDIA DIGITAL",
    description: "Solusi digital terpercaya untuk bisnis Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="x4sdmpcmha46zrftuej5y1d8gh7zvh" />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

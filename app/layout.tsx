import { Metadata } from "next";
import "@/app/ui/global.css";
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Acme Dashboard Humberto",
  description:
    "El curso Dashboard oficial de Next.js, construido con App Router.",
  metadataBase: new URL("https://primer-parcial-pi.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}

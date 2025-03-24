import "@/app/ui/global.css";
import { inter, lusitana, interBold } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interBold.className} antialiased`}>{children}</body>
    </html>
  );
}

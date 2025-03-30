import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acme Dashboard Humberto",
  description:
    "El curso Dashboard oficial de Next.js, construido con App Router.",
  metadataBase: new URL("https://primer-parcial-pi.vercel.app/"),
};

export default function Page() {
  return <p>Customers Page</p>;
}

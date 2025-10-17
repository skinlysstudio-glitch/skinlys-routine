import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Skinlys diagnostique skincare – Routine personnalisée",
  description: "Diagnostic skincare gratuit + routine personnalisée. Prise de RDV Planity. Skinlys.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

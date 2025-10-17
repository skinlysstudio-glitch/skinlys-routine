import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Skinlys Studio – Beauté du regard & électrolyse",
  description: "Skinlys Studio : électrolyse définitive, browlift, rehaussement de cils, peelings LCP Paris et soin signature à Villabé.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased min-h-screen font-body">{children}</body>
    </html>
  );
}

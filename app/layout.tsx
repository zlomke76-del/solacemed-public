import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolaceMed.ai",
  description:
    "Governed clinical AI infrastructure for healthcare environments where continuity, escalation, authority, and consequence matter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

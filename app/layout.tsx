import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOCFlow | SOC L1 Automation Portfolio",
  description: "Wazuh and Microsoft Sentinel SOC L1 triage automations built with n8n.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

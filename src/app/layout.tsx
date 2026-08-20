import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: ">_Aryaem",
  description:
    "Arya Maulana's Personal Web, A Product-Minded Frontend Engineer bridging backend efficiency with pixel-perfect visual fidelity.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${newsreader.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} bg-[var(--color-bg)] text-[var(--color-ink)] antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
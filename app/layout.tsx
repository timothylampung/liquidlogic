import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liquid Logic | Intelligent Beverage Dispensing",
  description: "The ultimate automatic beverage dispenser. Precision temperature, touchless hygiene, and customizable recipes in a stunning stainless steel design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

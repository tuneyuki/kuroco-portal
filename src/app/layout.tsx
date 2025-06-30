import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kuroco Tutorials",
  description: "Headless CMS Kuroco 1st page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}

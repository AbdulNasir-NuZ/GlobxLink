import type { Metadata, Viewport } from "next";
import "./source-styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobxLink | The Middle of Trade",
  description:
    "GlobxLink coordinates international trade through a Trade Readiness & Coordination Assessment and Provider Request service.",
  applicationName: "GlobxLink",
  openGraph: {
    title: "GlobxLink | The Middle of Trade",
    description:
      "Practical coordination between agreement and delivery, focused initially on the Africa to Türkiye corridor.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b296c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

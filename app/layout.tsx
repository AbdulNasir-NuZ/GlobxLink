import type { Metadata, Viewport } from "next";
import "./source-styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobxLink | The Middle of Trade",
  description:
    "Cross-border trade coordination and execution support, bringing structure, visibility and follow-through to the space between agreement and delivery.",
  applicationName: "GlobxLink",
  openGraph: {
    title: "GlobxLink | The Middle of Trade",
    description:
      "Cross-border trade coordination and execution support, initially focused on the Africa–Türkiye corridor.",
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

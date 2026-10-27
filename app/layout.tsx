import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

const GA_MEASUREMENT_ID = "G-7XJN75YKSG";

export const metadata: Metadata = {
  metadataBase: new URL("https://gptiti.com"),
  title: "GPTiti — Premium AI on your terms",
  description: "Premium AI without a monthly subscription. Launching in 2027.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

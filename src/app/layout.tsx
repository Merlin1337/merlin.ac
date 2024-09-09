import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Import Montserrat font with subsets
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Define metadata for the application
export const metadata: Metadata = {
  title: "Merlin Caromel | Full Stack Developer",
  description:
    "Full Stack Developer specializing in building dynamic, scalable web applications. Expertise in front-end and back-end development, delivering innovative solutions for businesses and individuals. Explore my portfolio to see my latest projects and technologies.",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Head section for icons and metadata */}
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`bg-black ${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

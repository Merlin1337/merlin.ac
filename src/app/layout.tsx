import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Merlin Caromel | Full Stack Developer",
  description: "Full Stack Developer specializing in building dynamic, scalable web applications. Expertise in front-end and back-end development, delivering innovative solutions for businesses and individuals. Explore my portfolio to see my latest projects and technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

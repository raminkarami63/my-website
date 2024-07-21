import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "My website",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative w-[1280px] h-[900px] bg-[#3F3F46]">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

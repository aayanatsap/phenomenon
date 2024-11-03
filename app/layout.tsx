import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Phenomenon",
  description: "",
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scrollbar scrollbar-none">
      <body className="bg-black scrollbar-thin scrollbar-webkit">
        <div className="fixed body-bg-image h-screen w-screen -z-[5000] opacity-60"></div>
        <Navbar/>
        <div className="translate-y-[150px]">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export const metadata: Metadata = {
  title: "Phenomenon",
  description: "",
  icons: {
    icon: '/logo.ico',  
    shortcut: '/logo.ico',
  }
};  

/* https://sjbhs.edu.in/phenomenon add to links while exporting */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scrollbar scrollbar-none">
      <head>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body className="bg-darkGalaxy">
        {/* <div className="fixed body-bg-image h-screen w-screen -z-[5000] opacity-60"></div> background image not required */}
        <Navbar/>
        <div className="translate-y-[150px]">
          {children}
        </div>
        <Footer/>
        <ShootingStars/>
        <StarsBackground/>
      </body>
    </html>
  );
}

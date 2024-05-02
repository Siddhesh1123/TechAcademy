import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teach Academy",
  description: "Teach Academy is a platform for learning and teaching",
  icons: {
    icon: "/courses/TechAcademy.png",
    
  },
  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      
      <html lang="en" className="dark">
        <body className={inter.className}>
          <div className="relative flex justify-center items-center w-full">
            <Navbar />
          </div>
          {children}
        </body>
      </html>
    </>
  );
}

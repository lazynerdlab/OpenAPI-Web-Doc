import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import Menu from "@/components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API Documentation",
  description: "Pursfinance API Documentation for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Menu />
        <section className="grid grid-cols-1 lg:grid-cols-[25%_75%] max-w-screen-xl mx-auto">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}

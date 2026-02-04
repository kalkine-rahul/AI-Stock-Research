import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import "./globals.css";
import Footer from '../components/Footer'

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astra — AI Stock Research",
  description: "Premium AI stock research prototype dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-emerald-400/20 selection:text-zinc-50`}
      >
        
     
        <main>
        <Header />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        {children}
      
        <Footer/>
        </div>
        </main>
      
      </body>
    </html>
  );
}

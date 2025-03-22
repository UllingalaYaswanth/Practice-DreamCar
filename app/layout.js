import {Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({
  subsets: ["latin"]
})

export const metadata = {
  title: "Intelliod",
  description: "Find your dream car ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>
      <footer className="bg-blue-50 py-20">
        <div className="container mx-auto text-center text-gray-600">
        <p>Made by YU.</p>
        </div>
      </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}

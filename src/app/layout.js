"use client"

import { AuthProvider } from "@/context/context";
import "./globals.css";
import Providers from "@/providers/providers";
import Navbar from "@/components/Navbar";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Navbar/>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}

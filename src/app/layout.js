"use client"

import { AuthProvider } from "@/context/context";
import "./globals.css";
import Providers from "@/providers/providers";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}

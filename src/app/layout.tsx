import type { Metadata } from "next";
import "./globals.css";
import FormStateProvider from "./context/FormStateProvider";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Build forms easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased light`}>
        <SessionProvider>
          <FormStateProvider>
            <Toaster position="top-right" richColors closeButton />
            {children}
          </FormStateProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

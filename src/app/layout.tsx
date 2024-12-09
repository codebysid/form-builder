import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import FormStateProvider from "./context/FormStateProvider";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

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
            <ToastContainer />
            {children}
          </FormStateProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

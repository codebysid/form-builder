import type { Metadata } from "next";
import "./globals.css";
import FormStateProvider from "./context/FormStateProvider";
import { Inter } from "next/font/google";

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
        <FormStateProvider>{children}</FormStateProvider>
      </body>
    </html>
  );
}

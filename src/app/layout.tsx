import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "ShopSpaces",
  description: "Online marketplace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
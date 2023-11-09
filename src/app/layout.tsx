import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ThemeRegistry from "./themeRegistry";
import { CssBaseline } from "@mui/material";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@450&display=swap"
          rel="stylesheet"
        />
      </head>
      <CssBaseline />
      <body className={raleway.className}>
        {" "}
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

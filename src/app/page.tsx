"use client";
import Image from "next/image";
import React from "react";
import MainNav from "./nav";
import { ColorModeContext, useThemeHook } from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const theme = useThemeHook();
  return (
    <ColorModeContext.Provider value={theme.colorMode}>
      <ThemeProvider theme={theme.theme}>
        <div>
          <MainNav />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

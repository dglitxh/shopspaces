"use client";
import { CssBaseline } from "@mui/material";
import React from "react";
import MainNav from "./nav";
import { ColorModeContext, useThemeHook } from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Hero from "./hero";

export default function Home() {
  const theme = useThemeHook();
  return (
    <ColorModeContext.Provider value={theme.colorMode}>
      <ThemeProvider theme={theme.theme}>
        <CssBaseline />
        <div>
          <MainNav />
          <Hero />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex"></div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

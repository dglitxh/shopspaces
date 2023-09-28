"use client";
import { CssBaseline } from "@mui/material";
import React from "react";
import { ColorModeContext, useThemeHook } from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Hero from "./landing/hero";
import About from "./landing/about";
import MainNav from "./landing/nav";

export default function Home() {
  const { theme, colorMode } = useThemeHook();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <MainNav />
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <Hero />

            <About />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

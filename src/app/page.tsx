"use client";
import { CssBaseline } from "@mui/material";
import React from "react";
import { ColorModeContext, useThemeHook } from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Hero from "./landing/hero";
import About from "./landing/about";
import MainNav from "./landing/nav";

export default function Home() {
  const theme = useThemeHook();
  return (
    <ColorModeContext.Provider value={theme.colorMode}>
      <ThemeProvider theme={theme.theme}>
        <CssBaseline />
        <div>
          <MainNav />
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <div className="z-10 w-full  items-center justify-between text-xl lg:flex">
              <Hero />
              <About />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

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
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <div className="z-10 w-full  items-center justify-between text-2xl lg:flex">
              <Hero />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

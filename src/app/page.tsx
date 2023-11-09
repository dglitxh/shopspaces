"use client";
import { CssBaseline, Container } from "@mui/material";
import React from "react";
import { ColorModeContext, useThemeHook } from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Hero from "./landing/hero";
import MainNav from "./landing/nav";
import MediaCards from "./landing/cards";
import Pricing from "./landing/pricing";
import About from "./landing/about";

export default function Home() {
  const { theme, colorMode } = useThemeHook();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <MainNav />
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <Hero />
            <About />
            <MediaCards />
            <Pricing />
          </main>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

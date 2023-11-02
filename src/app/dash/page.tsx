"use client";
import React from "react";
import Dashboard from "./Dashboard";
import { ColorModeContext, useThemeHook } from "@/utils/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const { theme, colorMode } = useThemeHook();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Dashboard />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

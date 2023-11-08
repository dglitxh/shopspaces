"use client";
import React from "react";
import SignUp from "./signup";
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
          <SignUp />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

"use client";
import React from "react";
import SignIn from "./SignIn";
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
          <SignIn />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

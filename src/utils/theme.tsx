"use client";
import * as React from "react";
import { createTheme } from "@mui/material/styles";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const useThemeHook = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "Raleway, Arial",
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap'});
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
          },
        },
      }),
    [mode]
  );
  return {
    colorMode,
    theme,
  };
};

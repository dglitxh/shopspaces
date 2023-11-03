"use client";
import React from "react";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const useThemeHook = () => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">(
    isDark ? "dark" : "light"
  );
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
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#00bbf9",
                },
                secondary: {
                  main: "#219ebc",
                },
                // divider: "#90e0ef",
                text: {
                  primary: "#023047",
                  secondary: "#264653",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#34a0a4",
                },
                secondary: {
                  main: "#76c893",
                },
                // divider: "#5fa8d3",
                background: {
                  default: "#0b090a",
                  paper: "#0a1128",
                },
                text: {
                  primary: "#fff",
                  secondary: "#8d99ae",
                },
              }),
        },
        typography: {
          fontFamily: "Raleway",
        },
      }),
    [mode, isDark]
  );
  return {
    colorMode,
    theme,
  };
};

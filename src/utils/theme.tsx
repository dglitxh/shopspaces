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
          primary: {
            main: "#00ED64",
          },
          mode,
        },
        typography: {
          fontFamily: "Raleway",
        },
      }),
    [mode]
  );
  return {
    colorMode,
    theme,
  };
};

"use client";
import React from "react";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const useThemeHook = () => {
  const dm = useMediaQuery("(prefers-color-scheme: dark)");
  const userPref = dm ? "dark" : "light";
  const [mode, setMode] = React.useState<"light" | "dark">(userPref||"dark");
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

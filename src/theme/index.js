import React, { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import typography from "./typography";
import palette from "./palette";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: {
        ...palette.light,
      },
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

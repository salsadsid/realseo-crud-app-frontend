"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#86937F",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6B7280",
      contrastText: "#ffffff",
    },
    error: {
      main: "#EF4444",
      contrastText: "#ffffff",
    },
    success: {
      main: "#10B981",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#F59E0B",
      contrastText: "#ffffff",
    },
    info: {
      main: "#3B82F6",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: "var(--font-poppins), sans-serif",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;

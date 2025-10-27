"use client";
import { SnackbarProvider } from "notistack";

const CustomSnackbarProvider = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;

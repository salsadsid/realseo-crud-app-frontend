import AppLayout from "@/components/core/AppLayout";
import ReduxProvider from "@/providers/ReduxProvider";
import CustomSnackbarProvider from "@/providers/SnackbarProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Poppins } from "next/font/google";
import "./globals.css";
import theme from "./theme";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Realseo CRUD App",
  description: "RealSEO is CRUD application for managing clients and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CustomSnackbarProvider>
              <ReduxProvider>
                <CssBaseline />
                <AppLayout>{children}</AppLayout>
              </ReduxProvider>
            </CustomSnackbarProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

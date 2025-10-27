"use client";
import theme from "@/app/theme";
import menuItems from "@/config/menu-items";
import { Breadcrumbs } from "@mui/material";
import Box from "@mui/material/Box";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import Footer from "./Footer";

const BRANDING = {
  logo: <Image src="/main_logo.png" alt="Logo" width={150} height={30} />,
  title: "",
};

function RouteBreadcrumbs() {
  const pathname = usePathname() || "/";
  const parts = pathname.split("/").filter(Boolean);

  const labelMap = {
    dashboard: "Dashboard",
    clients: "Clients",
    settings: "Settings",
    profile: "Profile",
  };

  const crumbs = parts.map((part, idx) => {
    const href = `/${parts.slice(0, idx + 1).join("/")}`;
    return {
      text: labelMap[part] || part.replace(/-/g, " "),
      href,
    };
  });

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ mb: 2 }}>
      <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
        Dashboard
      </Link>
      {crumbs.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {c.text}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = menuItems.map((item) => ({
    segment: item.path.replace("/", ""),
    title: item.text,
    icon: item.icon,
  }));

  const customRouter = React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => router.push(path),
    }),
    [pathname, router]
  );

  return (
    <AppProvider
      navigation={navigation}
      router={customRouter}
      theme={theme}
      branding={BRANDING}
    >
      <DashboardLayout
        sx={{
          "& .MuiAppBar-root": {
            backgroundColor: "#86937F",
          },
        }}
      >
        <Box
          sx={{
            mb: 2,
            p: 2,
            minHeight: "calc(100vh - 280px)",
            backgroundColor: "#F5F5F5",
            borderRadius: "4px",
          }}
        >
          <RouteBreadcrumbs />
          {children}
        </Box>
        <Footer />
      </DashboardLayout>
    </AppProvider>
  );
}

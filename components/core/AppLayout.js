"use client";
import theme from "@/app/theme";
import menuItems from "@/config/menu-items";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { FiPieChart, FiSettings, FiUser } from "react-icons/fi";
import ButtonIcon from "../common/ButtonIcon";
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

function ToolbarActions() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGotoPage = (page) => {
    handleClose();
    router.push(`/${page}`);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          display: { xs: "none", sm: "flex" },
        }}
      >
        <ButtonIcon
          onClick={() => handleGotoPage("dashboard")}
          icon={<FiPieChart />}
        />
        <ButtonIcon
          onClick={() => handleGotoPage("clients")}
          icon={<FiUser />}
        />

        <ButtonIcon
          onClick={() => handleGotoPage("settings")}
          icon={<FiSettings />}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          ml: 1,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
          },
        }}
        onClick={handleClick}
      >
        <Image src="/avatar.png" alt="User Avatar" width={28} height={28} />
        <Typography
          variant="body2"
          sx={{
            color: "white",
            fontWeight: 500,
            display: { xs: "none", sm: "block" },
          }}
        >
          David K. Croxton
        </Typography>
        <KeyboardArrowDown sx={{ color: "white" }} />
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1,
              "& .MuiAvatar-root": {
                width: 72,
                ml: -0.5,
                mr: 1,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => handleGotoPage("settings")}>Settings</MenuItem>
        <MenuItem onClick={() => handleGotoPage("clients")}>Clients</MenuItem>
      </Menu>
    </Box>
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
        slots={{
          toolbarActions: ToolbarActions,
        }}
        sx={{
          "& .MuiAppBar-root": {
            backgroundColor: "#86937F",
            color: "#FFFFFF",
          },
          "& .MuiIconButton-root": {
            color: "#FFFFFF",
          },
        }}
      >
        <Box
          sx={{
            mb: 2,
            p: 3,
            minHeight: "calc(100vh - 64px)",
            backgroundColor: "#F5F5F5",
            borderRadius: "4px",
          }}
        >
          <RouteBreadcrumbs />
          {children}
          <Footer />
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

"use client";
import menuItems from "@/config/menu-items";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Breadcrumbs } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import Footer from "./Footer";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

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
        Home
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

export default function AppDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const currentMenu = menuItems.find((m) => m.path === pathname);
  const appBarTitle = currentMenu ? currentMenu.text : "Persistent drawer";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link
                href={item.path || "#"}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                  display: "block",
                }}
              >
                <ListItemButton selected={pathname === item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open} className=" bg-[#F5F5F5] min-h-screen">
        <DrawerHeader />
        <RouteBreadcrumbs />
        <Box
          sx={{
            mb: 2,
            p: 2,
            minHeight: "calc(100vh - 280px)",
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
          }}
        >
          {children}
        </Box>
        <Footer />
      </Main>
    </Box>
  );
}

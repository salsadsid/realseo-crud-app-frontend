import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
        mt: 3,
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
      }}
    >
      <Typography variant="body2" sx={{ color: "#6B7280" }}>
        Copyright @ Realseo.digital 2023
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Link
          href="/terms"
          underline="none"
          sx={{
            color: "#6B7280",
            "&:hover": {
              color: "#111827",
            },
          }}
        >
          Terms and Conditions
        </Link>
        <Link
          href="/privacy"
          underline="none"
          sx={{
            color: "#6B7280",
            "&:hover": {
              color: "#111827",
            },
          }}
        >
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
}

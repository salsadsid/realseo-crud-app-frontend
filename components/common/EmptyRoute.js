import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FiClock } from "react-icons/fi";

const EmptyRoute = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 8,
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        border: "1px solid #E5E7EB",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "#F3F4F6",
          mb: 3,
        }}
      >
        <FiClock size={40} color="#86937F" />
      </Box>
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "#111827",
        }}
      >
        Coming Soon
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#6B7280",
          maxWidth: 400,
          mx: "auto",
        }}
      >
        This feature is currently under development. Check back soon for
        updates.
      </Typography>
    </Paper>
  );
};

export default EmptyRoute;

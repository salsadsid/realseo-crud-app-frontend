const { IconButton } = require("@mui/material");

const getColorStyles = (variant) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: "#86937F",
        color: "#ffffff",
        "&:hover": {
          backgroundColor: "#6F7A69",
        },
      };
    case "secondary":
      return {
        backgroundColor: "#6B7280",
        color: "#ffffff",
        "&:hover": {
          backgroundColor: "#4B5563",
        },
      };
    case "error":
      return {
        backgroundColor: "#EF4444",
        color: "#ffffff",
        "&:hover": {
          backgroundColor: "#DC2626",
        },
      };
    default:
      return {
        backgroundColor: "#4D5746",
        color: "inherit",
        "&:hover": {
          backgroundColor: "#6C7769",
        },
      };
  }
};

const ButtonIcon = ({ onClick = () => {}, icon, variant = "default" }) => {
  return (
    <IconButton
      size="small"
      sx={{
        borderRadius: "4px",
        p: 1,
        ...getColorStyles(variant),
      }}
      disableRipple
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default ButtonIcon;

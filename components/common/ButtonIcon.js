const { IconButton } = require("@mui/material");

const ButtonIcon = ({ onClick = () => {}, icon }) => {
  return (
    <IconButton
      color="inherit"
      size="small"
      sx={{
        borderRadius: "4px",
        backgroundColor: "#4D5746",
        "&:hover": {
          backgroundColor: "#6C7769",
        },
        p: 1,
      }}
      disableRipple
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default ButtonIcon;

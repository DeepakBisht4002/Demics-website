import { Chip } from "@mui/material";

const MuiChip = ({ value, isActive, onClick }) => {
  return (
    <Chip
      key={value}
      label={value}
      onClick={onClick}
      variant="outlined"
      sx={{
        color: "#FFFFFF",
        borderColor: isActive ? "#8200FF" : "#FFFFFF",
        backgroundColor: isActive ? "#8200FF !important" : "transparent",
        borderRadius: "999px",
        px: 2,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: isActive ? "#8200FF !important" : "#e0e0e0",
        },
      }}
    />
  );
};

export default MuiChip;

import { Button } from "@mui/material";

const MuiButton = ({ label = "Click Me", onClick, type = "button" }) => {
  return (
    <>
      <Button
        type={type}
        onClick={onClick}
        variant="contained"
        sx={{ background: "#8200FF", borderRadius: "70px" }}
      >
        {label}
      </Button>
    </>
  );
};

export default MuiButton;

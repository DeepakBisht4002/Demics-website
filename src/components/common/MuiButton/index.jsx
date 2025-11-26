import { Button } from "@mui/material";

const MuiButton = ({label="Click Me",onClick}) => {
  return (
    <>
      <Button
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

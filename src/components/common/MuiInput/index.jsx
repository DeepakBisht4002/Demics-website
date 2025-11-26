import { TextField } from "@mui/material";

const MuiInput = ({
  label,
  name,
  value,
  onChange,
  multiline = false,
  rows = 1,
  placeholder = "",
  ...rest
}) => {
  return (
    <div
      style={{
        borderLeft: "1px solid #fff",
        borderTop: "1px solid #fff",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
      }}
    >
      <TextField
        fullWidth
        variant=""
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          "& .MuiInputBase-input": {
            color: "#fff",
          },

          "& .MuiInputLabel-root": {
            color: "#ccc",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#fff",
          },

          "& .MuiInputBase-input::placeholder": {
            color: "#aaa",
            opacity: 1,
          },

          // remove MUI's internal background
          "& .MuiFilledInput-root": {
            background: "transparent !important",
            padding: 0, // important so wrapper padding works
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default MuiInput;

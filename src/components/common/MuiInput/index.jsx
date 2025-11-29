import { TextField } from "@mui/material";

const MuiInput = ({
  label,
  name,
  value,
  onChange,
  multiline = false,
  rows = 1,
  placeholder = "",
  variant = "standard",
  type = "text", // default to text
  ...rest
}) => {
  return (
    <div
      style={{
        flex: 1,
        borderLeft: "1px solid #fff",
        borderTop: "1px solid #fff",
        borderRadius: "5px",
        marginBottom: "15px",
        padding: "8px",
      }}
    >
      <TextField
        type={type}
        fullWidth
        variant={variant}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        sx={{
          "& input[type=number]::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input[type=number]::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
          "& .MuiInputBase-input": {
            color: "#fff",
            paddingTop: "12px",
            paddingBottom: "8px",
          },
          "& .MuiInputLabel-root": {
            color: "#ccc",
            top: "-4px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#fff",
            top: "-4px",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#aaa",
            opacity: 1,
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#fff",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#aaa",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#8200FF",
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default MuiInput;

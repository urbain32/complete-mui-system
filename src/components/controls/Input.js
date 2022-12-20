import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      fullWidth
      sx={{ marginBottom: 1 }}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error
      helperText="some error"
    />
  );
}

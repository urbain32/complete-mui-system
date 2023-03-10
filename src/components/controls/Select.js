import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";

export default function Select(props) {
  const { name, label, value, onChange, options, error = null } = props;
  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{ marginBottom: 2 }}
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} label={label} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

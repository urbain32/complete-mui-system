import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;
  const converDefaultEventParams = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat="MM/DD/YYYY"
        name={name}
        value={value}
        onChange={(date) => onChange(converDefaultEventParams(name, date))}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

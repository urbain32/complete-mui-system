import {
  Checkbox as MuiCheckBox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";

export default function CheckBox(props) {
  const { name, label, value, onChange } = props;
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MuiCheckBox
            name={name}
            color="primary"
            checked={value}
            onChange={onChange}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}

import {
  Checkbox as MuiCheckBox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";

export default function CheckBox(props) {
  const { name, label, value, onChange } = props;
  //coz check box can't take the data of name,value we can create a func that we convert it
  const converDefaultEventParams = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormGroup sx={{ marginBottom: 1 }}>
      <FormControlLabel
        control={
          <MuiCheckBox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(converDefaultEventParams(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormGroup>
  );
}

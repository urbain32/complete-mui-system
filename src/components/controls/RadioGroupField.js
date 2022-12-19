import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

export default function RadioGroupField(props) {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={
              item.id === "female" ? (
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              ) : (
                <Radio />
              )
            }
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
// if (item.id === "female") {
//   <FormControlLabel
//     value={item.id}
//     control={

//     }
//     label={item.title}
//   />;
// } else {
//   <FormControlLabel value={item.id} control={<Radio />} label={item.title} />;
// }

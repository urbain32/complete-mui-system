import { Button as MuiButton } from "@mui/material";
import React from "react";

export default function Button(props) {
  const { text, size, color, variant, onClick } = props;
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
}

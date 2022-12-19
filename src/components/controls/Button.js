import { Button as MuiButton } from "@mui/material";
import React from "react";

export default function Button(props) {
  const { text, size, color, variant, onClick } = props;
  return (
    <Button size={size} color={color} variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
}

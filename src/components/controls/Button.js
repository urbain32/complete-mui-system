import { Button as Buttom, styled } from "@mui/material";
import React from "react";
const MuiButton = styled(Buttom)((theme) => ({
  marginRight: 8,
  textTransform: "none",
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}

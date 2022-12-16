import { styled } from "@mui/system";
import React from "react";
const SideMenuDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: "0px",
  width: "320px",
  height: "100%",
  backgroundColor: "#253053",
});
const SideMenu = () => {
  return <SideMenuDiv></SideMenuDiv>;
};

export default SideMenu;

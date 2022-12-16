import { Card, Paper, styled, Typography } from "@mui/material";
import React from "react";
const Div = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  marginBottom: theme.spacing(2), //spacing(1)=8px of 2=16
}));
const CardIcon = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "inline-block",
  color: "#3c44b1",
}));
const DivTitle = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  ".MuiTypography-subtitle2": {
    opacity: 0.5,
    textAlign: "center",
  },
}));
const PageHeader = (props) => {
  const { title, subtitle, icon } = props;
  return (
    <Paper elevation={0} square sx={{ backgroundColor: "#fdfdff" }}>
      <Div>
        <CardIcon>{icon}</CardIcon>
        <DivTitle>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </DivTitle>
      </Div>
    </Paper>
  );
};

export default PageHeader;

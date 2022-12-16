import { Card, Paper, styled, Typography } from "@mui/material";
import React from "react";
const Div = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  marginBottom: theme.spacing(2),
}));
const CardIcon = styled(Card)(({ theme }) => ({
  padding: theme.spacing(),
  display: "inline-block",
  color: "#3c44b1",
}));
const PageHeader = (props) => {
  const { title, subtitle, icon } = props;
  return (
    <Paper elevation={0} square sx={{ backgroundColor: "#fdfdff" }}>
      <Div>
        <CardIcon>{icon}</CardIcon>
        <div>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </Div>
    </Paper>
  );
};

export default PageHeader;

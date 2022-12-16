import { Card, Paper } from "@mui/material";
import React from "react";

const PageHeader = (props) => {
  const { title, subtitle, icon } = props;
  return (
    <Paper elevation={0} square>
      <div>
        <Card>{icon}</Card>
      </div>
    </Paper>
  );
};

export default PageHeader;

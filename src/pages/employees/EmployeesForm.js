import { Grid } from "@mui/material";
import React, { useState } from "react";
const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departementId: "",
  hireDate: new Date(),
  isPermanent: false,
};
const EmployeesForm = () => {
  const [values, setValues] = useState(initialValues);
  return (
    <form>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

export default EmployeesForm;

import { Grid, styled, TextField } from "@mui/material";
import React, { useState } from "react";
const MyForm = styled("form")(({ theme }) => ({
  with: "80%",
  margin: theme.spacing(1), //spacing(1)=8px
}));
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
    <MyForm>
      <Grid container sx={{}}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            sx={{ marginBottom: 2, gap: 2 }}
            variant="outlined"
            label="Full Name"
            value={values.fullName}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            value={values.email}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </MyForm>
  );
};

export default EmployeesForm;

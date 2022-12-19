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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <MyForm>
      <Grid container sx={{}}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            sx={{ marginBottom: 2 }}
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </MyForm>
  );
};

export default EmployeesForm;

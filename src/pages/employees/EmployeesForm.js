import { Grid, TextField } from "@mui/material";
import { useForm, Form } from "../../components/useForm";
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
  const { values, setValues, handleInputChange } = useForm(initialValues);
  return (
    <Form>
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
    </Form>
  );
};

export default EmployeesForm;

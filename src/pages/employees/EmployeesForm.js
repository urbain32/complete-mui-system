import { Grid } from "@mui/material";
import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../services/employeeService";
import { Cached } from "@mui/icons-material";
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
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
];

const EmployeesForm = () => {
  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This Field is required.";
    temp.email = /$|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    temp.mobile =
      values.mobile.length > 9 ? "" : "Minimum 10 number is required ";
    temp.departementId =
      values.departementId.length !== 0 ? "" : "This Field is required.";
    setErrors({ ...temp });
  };
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialValues);
  const handleSubmit = () => {
    window.alert("testing ....");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={8}>
        <Grid item xs={12} lg={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Controls.RadioGroupField
            label="Gender"
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            label="Departement"
            name="departementId"
            value={values.departementId}
            onChange={handleInputChange}
            options={employeeService.getDepartementCollection()}
          />
          <Controls.DatePicker
            label="Hire Date"
            name="hireDate"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            label="Permanent Employee"
            name="isPermanent"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button
              variant="outlined"
              color="info"
              startIcon={<Cached />}
              text="Reset"
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeesForm;

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
  const validate = (fieldValues = values) => {
    let temp = {};
    if ("fullNamme" in fieldValues)
      temp.fullName = values.fullName ? "" : "This Field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(values.email)
        ? ""
        : "Email is not valid.";
    temp.mobile =
      values.mobile.length > 9 ? "" : "Minimum 10 number is required ";
    temp.departementId =
      values.departementId.length !== 0 ? "" : "This Field is required.";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValues, true, validate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("testing ....");
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
            error={errors.fullName}
          />
          <Controls.Input
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
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
            error={errors.departementId}
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
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeesForm;

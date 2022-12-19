import { Grid } from "@mui/material";
import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
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
  const { values, setValues, handleInputChange } = useForm(initialValues);
  console.log("first", values);
  return (
    <Form>
      <Grid container spacing={4}>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroupField
            label="Gender"
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeesForm;

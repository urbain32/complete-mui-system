import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
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
  console.log("first", values);
  return (
    <Form>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            fullWidth
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
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeesForm;

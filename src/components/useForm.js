import { styled } from "@mui/material";
import { useState } from "react";
const MyForm = styled("form")(({ theme }) => ({
  width: "80%",
  margin: theme.spacing(1), //spacing(1)=8px
}));
export function useForm(initialValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

export function Form(props) {
  const { children, ...other } = props;
  return (
    <MyForm autoComplete="off" {...other}>
      {props.children}
    </MyForm>
  );
}

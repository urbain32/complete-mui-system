import { styled } from "@mui/material";
import { useState } from "react";
const MyForm = styled("form")(({ theme }) => ({
  with: "80%",
  margin: theme.spacing(1), //spacing(1)=8px
}));
export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

export function Form(props) {
  return <MyForm>{props.children}</MyForm>;
}

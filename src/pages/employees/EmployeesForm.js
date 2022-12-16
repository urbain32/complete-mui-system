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
  return <form></form>;
};

export default EmployeesForm;

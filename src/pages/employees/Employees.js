import { PeopleOutlineTwoTone } from "@mui/icons-material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";

const Employees = () => {
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <EmployeesForm />
    </>
  );
};

export default Employees;

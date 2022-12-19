import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { Paper, styled } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";
const MyPaper = styled(Paper)((theme) => ({
  margin: "40px",
  padding: "18px",
}));
const Employees = () => {
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <MyPaper square>
        <EmployeesForm />
      </MyPaper>
    </>
  );
};

export default Employees;

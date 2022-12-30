import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { Paper, styled, TableBody } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import EmployeesForm from "./EmployeesForm";
const MyPaper = styled(Paper)((theme) => ({
  margin: "40px",
  padding: "18px",
}));
const Employees = () => {
  const { TblContainer } = useTable();
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <MyPaper square>
        {/* <EmployeesForm /> */}
        <TblContainer>
          <TableBody></TableBody>
        </TblContainer>
      </MyPaper>
    </>
  );
};

export default Employees;

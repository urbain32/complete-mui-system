import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { Paper, styled, TableBody, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import EmployeesForm from "./EmployeesForm";
import * as employeeService from "../../services/employeeService";

const MyPaper = styled(Paper)((theme) => ({
  margin: "40px",
  padding: "18px",
}));
const Employees = () => {
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  console.log("re--", records);
  const { TblContainer } = useTable();
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <MyPaper square>
        <EmployeesForm />
        <TblContainer>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.fullName}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.mobile}</TableCell>
                <TableCell>{record.departement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </MyPaper>
    </>
  );
};

export default Employees;

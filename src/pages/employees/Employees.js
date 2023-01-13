import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { Paper, styled, TableBody, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";

const MyPaper = styled(Paper)((theme) => ({
  margin: "40px",
  padding: "18px",
}));
const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Employee address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "departement", label: "Departement", disableSorting: true },
];
const Employees = () => {
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells);
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <MyPaper square>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.fullName}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.mobile}</TableCell>
                <TableCell>{record.departement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </MyPaper>
    </>
  );
};

export default Employees;

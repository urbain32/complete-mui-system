import { PeopleOutlineTwoTone, Search } from "@mui/icons-material";
import {
  InputAdornment,
  Paper,
  styled,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../components/controls/Controls";
import EmployeesForm from "../../pages/employees/EmployeesForm";
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
  const [filterFn, setFilterFn] = useState();
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells);
  const handleSearch = (e) => {
    let target = e.target;
  };
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <MyPaper square>
        {/* <EmployeesForm /> */}
        <Toolbar>
          <div style={{ width: "75%" }}>
            <Controls.Input
              label="Search Employee"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={handleSearch()}
            />
          </div>
        </Toolbar>
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

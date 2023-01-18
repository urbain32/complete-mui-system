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
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);
  // const handleSearch = (e) => {
  //   let target = e.target;
  //   setFilterFn({
  //     fn: (items) => {
  //       if (e.target.value == "") return items;
  //       else
  //         return items.filter((x) =>
  //           x.fullName.toLowerCase().includes(e.target.value)
  //         );
  //     },
  //   });
  // };

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
              // onChange={handleSearch}
            />
          </div>
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.departement}</TableCell>
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

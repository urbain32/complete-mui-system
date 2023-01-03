import { styled, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
const MyTable = styled(Table)(({ theme }) => ({
  margin: theme.spacing(3), //spacing(1)=8px
  "& thead th": {
    fontWeight: "600",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
  },
  "& tbody td": {
    fontWeight: "300",
  },
  "& tbody tr:hover": {
    backgroundColor: "#fffbf2",
    cursor: "pointer",
  },
}));

export default function useTable(records, headCells, theme) {
  const pages = [5, 10, 20];
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  // func for table container
  const TblContainer = (props) => <MyTable>{props.children}</MyTable>;
  // func for table head
  const TblHead = (props) => {
    return (
      <TableHead sx={{ fontWeight: "600" }}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  // returning all the func in useTable

  return { TblContainer, TblHead };
}

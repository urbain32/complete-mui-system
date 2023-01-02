import { styled, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
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
  const TblContainer = (props) => <MyTable>{props.children}</MyTable>;
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
  return { TblContainer, TblHead };
}

import { ThemeContext } from "@emotion/react";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function useTable(records, headCells, theme) {
  const TblContainer = (props) => (
    <Table sx={{ marginTop: "24px" }}>{props.children}</Table>
  );
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

import {
  styled,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
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
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();
  // func for table container
  const TblContainer = (props) => <MyTable>{props.children}</MyTable>;
  // func for table head
  const TblHead = (props) => {
    const handleSort = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };
    return (
      <TableHead sx={{ fontWeight: "600" }}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>
              <TableSortLabel
                onClick={() => {
                  handleSort(headCell.id);
                }}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  // func for pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
  // creating a function to record per page
  const recordsAfterPagingAndSorting = () => {
    return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };
  // returning all the func in useTable

  return { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting };
}

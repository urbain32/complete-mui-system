import { Table, TableHead } from "@mui/material";
import React from "react";

export default function useTable(records, headCell) {
  const TblContainer = (props) => <Table>{props.children}</Table>;
  const TblHead = (props) => {
    return <TableHead></TableHead>;
  };
  return { TblContainer, TblHead };
}

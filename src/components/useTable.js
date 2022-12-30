import { Table, TableHead } from "@mui/material";
import React from "react";

export default function useTable(records, headCell) {
  const TblContainer = (props) => <Table>{props.children}</Table>;
  const TblHeader = (props) => {
    return <TableHead></TableHead>;
  };
  return { TblContainer, TblHeader };
}

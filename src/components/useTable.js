import { Table } from "@mui/material";
import React from "react";

export default function useTable(records, headCell) {
  const TblContainer = (props) => <Table></Table>;
  return { TblContainer };
}

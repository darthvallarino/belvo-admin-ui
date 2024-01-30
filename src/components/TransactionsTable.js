"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "@/components/Title";
import { useGetAllTransactionsQuery } from "@/store/belvo/belvo.api";

export default function TransactionsTable() {
  const { data } = useGetAllTransactionsQuery();
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Title>Transacciones</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        {data && (
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </Paper>
  );
}

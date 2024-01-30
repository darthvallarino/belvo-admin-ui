"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "@/components/Title";
import Typography from "@mui/material/Typography";
import { useGetAllTransactionsQuery } from "@/store/belvo/belvo.api";

export default function Page() {
  const { data } = useGetAllTransactionsQuery();
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Title>Transacciones</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        {data && (
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.account.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Typography
                    component="span"
                    variant="caption"
                    gutterBottom
                    sx={{
                      color: (theme) =>
                        row.type === "INFLOW"
                          ? theme.palette.success.main
                          : theme.palette.error.main,
                    }}
                  >
                    {row.amount}
                  </Typography>
                </TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </Paper>
  );
}

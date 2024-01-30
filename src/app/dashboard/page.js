"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Title from "@/components/Title";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { fCurrency } from "@/utils/formatNumber";

import {
  useGetTransactionsByAccountQuery,
  useGetTransactionsByCategoryQuery,
  useGetTransactionsQuery
} from "@/store/belvo/belvo.api";

export default function Page() {
  const { data } = useGetTransactionsByAccountQuery();
  const { data: dataCategory } = useGetTransactionsByCategoryQuery();
  const { data: dataTransactions } = useGetTransactionsQuery();

  return (
    <>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mb: 4 }}>
        {data && (
          <Box>
            <Title>Entradas y salidas por cuenta</Title>
            <BarChart
              xAxis={[{ scaleType: "band", data: data.map((d) => d.name) }]}
              series={[
                {
                  data: data.map((d) => d.amounts.in),
                  label: "IN",
                  valueFormatter: (value) => fCurrency(value),
                },
                {
                  data: data.map((d) => d.amounts.out),
                  label: "OUT",
                  valueFormatter: (value) => fCurrency(value),
                },
              ]}
              width={600}
              height={300}
            />
          </Box>
        )}
        {dataCategory && (
          <Box sx={{ mt: 4 }}>
            <Title>Gastos</Title>
            <PieChart
              series={[
                {
                  data: [
                    ...dataCategory.map((d, index) => ({
                      label: d.category,
                      value: d.amounts.out,
                      id: index,
                    })),
                  ],
                },
              ]}
              width={600}
              height={200}
            />
          </Box>
        )}
        {dataTransactions && (
          <Box sx={{ mt: 4 }}>
            <Title>Salud Financiera</Title>
            <PieChart
              series={[
                {
                  data: [
                    {
                      label: 'Entradas',
                      value: dataTransactions.amounts.in,
                      id: 1,
                    },
                    {
                      label: 'Salidas',
                      value: dataTransactions.amounts.out,
                      id: 1,
                    }
                  ],
                },
              ]}
              width={600}
              height={200}
            />
          </Box>
        )}
      </Paper>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>Montos por categoria</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>IN</TableCell>
              <TableCell>OUT</TableCell>
            </TableRow>
          </TableHead>
          {data && (
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      variant="caption"
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.success.main,
                      }}
                    >
                      {fCurrency(row.amounts.in)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      variant="caption"
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.error.main,
                      }}
                    >
                      {fCurrency(row.amounts.out)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </Paper>
    </>
  );
}

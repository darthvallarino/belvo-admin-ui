import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuthHeader } from "../utils";

const baseUrl = process.env.NEXT_PUBLIC_API;

export const belvoApi = createApi({
  reducerPath: "belvoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/belvo`,
    prepareHeaders: (headers, api) => setAuthHeader(headers, api.getState),
  }),
  endpoints: (builder) => ({
    getAllTransactions: builder.query({
      query: () => `getAllTransactions`,
      providesTags: ["transactions"],
      keepUnusedDataFor: 0,
    }),
    getTransactionsByAccount: builder.query({
      query: () => `getTransactionsByAccount`,
      providesTags: ["transactionsByAccount"],
      keepUnusedDataFor: 0,
    }),
    getTransactionsByCategory: builder.query({
      query: () => `getTransactionsByCategory`,
      providesTags: ["transactionsByCategory"],
      keepUnusedDataFor: 0,
    }),
    getTransactions: builder.query({
      query: () => `getTransactions`,
      providesTags: ["transactions"],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useGetAllTransactionsQuery,
  useGetTransactionsByAccountQuery,
  useGetTransactionsByCategoryQuery,
  useGetTransactionsQuery,
} = belvoApi;

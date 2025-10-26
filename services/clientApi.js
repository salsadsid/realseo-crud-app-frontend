"use strict";
import { baseApi } from "@/services/baseApi";

export const clientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => ({ url: "/clients" }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Clients", id })),
              { type: "Clients", id: "LIST" },
            ]
          : [{ type: "Clients", id: "LIST" }],
    }),
    getClientById: builder.query({
      query: (id) => ({ url: `/clients/${id}` }),
      providesTags: (result, error, id) => [{ type: "Clients", id }],
    }),
    addClient: builder.mutation({
      query: (payload) => ({ url: "/clients", method: "POST", body: payload }),
      invalidatesTags: [{ type: "Clients", id: "LIST" }],
    }),
    updateClient: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/clients/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Clients", id },
        { type: "Clients", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetClientsQuery,
  useGetClientByIdQuery,
  useAddClientMutation,
  useUpdateClientMutation,
} = clientApi;

export default clientApi;

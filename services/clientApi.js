"use strict";
import { baseApi } from "@/services/baseApi";

export const clientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query({
      query: (params = {}) => {
        const queryParams = new URLSearchParams();
        if (params.search) {
          queryParams.append("search", params.search);
        }
        return {
          url: `/clients${queryParams.toString() ? `?${queryParams.toString()}` : ""}`,
        };
      },
      transformResponse: (response) => response.data,
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
      transformResponse: (response) => response.data,
      providesTags: (result, error, id) => [{ type: "Clients", id }],
    }),
    addClient: builder.mutation({
      query: (payload) => ({ url: "/clients", method: "POST", body: payload }),
      transformResponse: (response) => response.data,
      invalidatesTags: [{ type: "Clients", id: "LIST" }],
    }),
    updateClient: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/clients/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (result, error, { id }) => [
        { type: "Clients", id },
        { type: "Clients", id: "LIST" },
      ],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Clients", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetClientsQuery,
  useGetClientByIdQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = clientApi;

export default clientApi;

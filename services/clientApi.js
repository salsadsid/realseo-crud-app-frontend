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
  }),
  overrideExisting: false,
});

export const { useGetClientsQuery } = clientApi;

export default clientApi;

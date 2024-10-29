import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the User type
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
  }),
});

// Export the auto-generated hook for the `getUsers` query endpoint
export const { useGetUsersQuery } = apiSlice;

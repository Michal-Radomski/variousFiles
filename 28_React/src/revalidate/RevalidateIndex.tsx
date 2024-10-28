import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SwrUsers from "./SWRusers";
import UseUsersQuery from "./UseUsersQuery";

const queryClient: QueryClient = new QueryClient();

const RevalidateIndex = (): JSX.Element => {
  return (
    <React.Fragment>
      {/* //* SWR Library */}
      <SwrUsers />
      {/* //* React-Query Library */}
      <QueryClientProvider client={queryClient}>
        <UseUsersQuery />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default RevalidateIndex;

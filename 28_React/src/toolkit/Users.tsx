import React from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

import { useGetUsersQuery, User } from "./apiSlice";

const Users = (): JSX.Element => {
  const { data: users = [] as User[], error, isLoading } = useGetUsersQuery();

  if (isLoading as boolean) {
    return <div>Loading...</div>;
  }
  if (error as FetchBaseQueryError | SerializedError | undefined) {
    return <div>Error fetching users</div>;
  }

  return (
    <React.Fragment>
      <div>
        <h3>User List - Redux Toolkit Query (RTK Query) Library</h3>
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Users;

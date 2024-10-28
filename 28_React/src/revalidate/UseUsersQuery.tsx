import React from "react";
import { useQuery } from "@tanstack/react-query";

import { usersUrl } from "./SWRusers";

const fetchUsers = async (): Promise<UserProps[]> => {
  const response: Response = await fetch(usersUrl);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = response.json() as Promise<UserProps[]>;
  return data;
};

const UseUsersQuery = (): JSX.Element => {
  const {
    data: usersData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    refetchInterval: 10000, // Refetch every 10 seconds
    staleTime: 30000, // Keep data fresh for 30 seconds
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <React.Fragment>
      <h3>React-Query Library</h3>
      <ul>
        {usersData?.map(
          (user: UserProps, index: number): JSX.Element => (
            <li key={index}>{`${user.name} - ${user.email} - ${user.age}`}</li>
          )
        )}
      </ul>
    </React.Fragment>
  );
};

export default UseUsersQuery;

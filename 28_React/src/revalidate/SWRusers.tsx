import React from "react";
import useSWR from "swr";

export const usersUrl = "https://jsonplaceholder.typicode.com/users";

const fetcher: (usersUrl: URL) => Promise<UserProps[]> = (url: URL) => fetch(url).then((res: Response) => res.json());

const SwrUsers = (): JSX.Element => {
  const {
    data: userData,
    error,
    isLoading,
  } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher, {
    refreshInterval: 10000, // Refetch every 10 seconds
    revalidateOnFocus: true, // Revalidate on window focus
  });

  if (!userData || isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <React.Fragment>
      <h3>SWR Library</h3>
      <ul>
        {userData?.map(
          (user: UserProps, index: number): JSX.Element => (
            <li key={index}>{`${user.name} - ${user.email} - ${user.age}`}</li>
          )
        )}
      </ul>
    </React.Fragment>
  );
};

export default SwrUsers;

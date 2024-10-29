import React from "react";
import ReactTable from "./ReactTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const TableWrapper = (): JSX.Element => {
  const data: User[] = React.useMemo(
    () => [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
    ],
    []
  );

  return (
    <div>
      <h3>User Table - React-Table Library</h3>
      <ReactTable data={data} columns={columns} />
    </div>
  );
};

export default TableWrapper;

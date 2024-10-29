import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  Table,
  HeaderGroup,
  Header,
  Row,
  Cell,
} from "@tanstack/react-table";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

const ReactTable = <T,>({ data, columns }: TableProps<T>): JSX.Element => {
  const table: Table<T> = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(
          (headerGroup: HeaderGroup<T>): JSX.Element => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(
                (header: Header<T, unknown>): JSX.Element => (
                  <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
                )
              )}
            </tr>
          )
        )}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(
          (row: Row<T>): JSX.Element => (
            <tr key={row.id}>
              {row.getVisibleCells().map(
                (cell: Cell<T, unknown>): JSX.Element => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                )
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default ReactTable;

import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TableComponent = ({ tableData }: { tableData: ToDo[] }): JSX.Element => {
  return (
    <React.Fragment>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed?</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((todo: ToDo, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo?.userId}</td>
                <td>{todo?.id}</td>
                <td>{todo?.title}</td>
                <td>{todo?.completed.toString()}</td>
                <td>
                  <Button variant="warning">Edit</Button>
                </td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default TableComponent;

// const handleDelete = () => {
//   $.ajax({
//     url: 'https://api.example.com/data/123',
//     method: 'DELETE',
//     success: function(response) {
//       setIsDeleted(true);
//     },
//     error: function(error) {
//       console.error('Error deleting data:', error);
//     }
//   });
// };

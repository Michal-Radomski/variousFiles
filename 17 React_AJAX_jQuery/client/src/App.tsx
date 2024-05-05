import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import $ from "jquery";

import "./App.scss";
import SharkForm from "./SharkForm";
import ReactJQuery from "./ReactJQuery";

const baseApiURL = "http://localhost:5000/api";

const App = (): JSX.Element => {
  //* Local State
  const initialState: Shark = { name: "", color: "", weight: 0 };

  const [sharksList, setSharksList] = React.useState<Shark[]>([]);
  const [sharkForm, setSharkForm] = React.useState<Shark>(initialState);

  //* Get data using REST API
  const getData = React.useCallback(() => {
    $.ajax({
      url: `${baseApiURL}/whole-list`,
      method: "GET",
      success: function (response) {
        // Update the state with the fetched data
        console.log("GET response:", response);
        setSharksList(response?.list);
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  //* Form editing
  const onChange = (event: React.ChangeEvent<HTMLFormElement>): void => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log({ name, value });
    setSharkForm({
      ...sharkForm,
      [name]: value,
    });
  };

  //* Submit form
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    // const { name, color, weight } = sharkForm;
    // console.log("sharkForm:", sharkForm);
    try {
      sharkForm.hasOwnProperty("ID")
        ? //@ Edit an existing shark
          $.ajax({
            url: `${baseApiURL}/shark/${sharkForm?.ID}`,
            method: "PUT",
            data: sharkForm,
            success: function (response) {
              console.log("PUT response:", response);
            },
            error: function (error) {
              console.error("Error fetching data:", error);
            },
          })
        : //@ Create a new Shark
          $.ajax({
            url: `${baseApiURL}/add-item`,
            method: "POST",
            data: sharkForm,
            success: function (response) {
              console.log("POST response:", response);
            },
            error: function (error) {
              console.error("Error fetching data:", error);
            },
          });
    } finally {
      setTimeout(() => {
        getData();
        setSharkForm(initialState);
      }, 500);
    }
  };

  //* Reset form
  const onReset = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSharkForm(initialState);
  };

  //* Delete a Shark
  const deleteShark = async (id: number): Promise<void> => {
    // console.log({ id });
    try {
      $.ajax({
        url: `${baseApiURL}/delete/${id}`,
        method: "DELETE",
        success: function (response) {
          console.log("DELETE response:", response);
        },
        error: function (error) {
          console.error("Error deleting data:", error);
        },
      });
    } finally {
      setTimeout(() => {
        getData();
      }, 500);
    }
  };

  //* Edit Shark
  const editShark = (id: number): void => {
    const sharkToEdit = sharksList?.filter((elem: Shark) => elem?.ID === id)?.[0];
    // console.log("sharkToEdit:", sharkToEdit);
    setSharkForm(sharkToEdit);
  };

  //* Sharks Table
  const SharksTable = (): JSX.Element => {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Weight</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {sharksList?.map((shark: Shark, index: number) => {
            return (
              <tr key={index}>
                <td>{shark?.ID}</td>
                <td>{shark?.name}</td>
                <td>{shark?.color}</td>
                <td>{shark?.weight}</td>
                <td>
                  <ButtonGroup>
                    <Button onClick={() => deleteShark(shark?.ID!)} variant="danger" size="sm">
                      Delete
                    </Button>
                    <Button onClick={() => editShark(shark?.ID!)} variant="warning" size="sm">
                      Edit
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="text-center">
          <tr>
            <th colSpan={5}>Total: {sharksList?.length}</th>
          </tr>
        </tfoot>
      </Table>
    );
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <ReactJQuery />
        <br />
        <br />

        <div className="d-flex align-items-center justify-content-center align-content-center flex-column">
          <h1 className="text-center py-4">Sharks List</h1>
          {sharksList?.length ? <SharksTable /> : null}
          <br />
          <SharkForm sharkForm={sharkForm} onChange={onChange} onSubmit={onSubmit} onReset={onReset} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

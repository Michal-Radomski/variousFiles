import React from "react";
import axios from "axios";
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
        // console.log("response:", response);
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
          await axios
            .put(`${baseApiURL}/shark/${sharkForm?.ID}`, sharkForm)
            .then(({ data }) => {
              console.log("data:", data);
            })
            .catch((error) => console.error(error))
        : //@ Create a new Shark
          await axios
            .post(`${baseApiURL}/add-item`, sharkForm)
            .then(({ data }) => {
              console.log("data:", data);
            })
            .catch((error) => console.error(error));
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
      await axios
        .delete(`${baseApiURL}/delete/${id}`)
        .then(({ data }) => {
          console.log("data:", data);
        })
        .catch((error) => console.error(error));
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

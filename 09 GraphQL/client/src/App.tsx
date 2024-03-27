import React from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

import "./App.scss";
import AddShark from "./AddShark";

const baseApiURL = "http://localhost:4000/api";

const App = (): JSX.Element => {
  const initialState: Shark = { name: "", color: "", weight: 0 };

  const [sharksList, setSharksList] = React.useState<Shark[]>([]);
  const [sharkForm, setSharkForm] = React.useState<Shark>(initialState);

  const onChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log({ name, value });
    setSharkForm({
      ...sharkForm,
      [name]: value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("sharkForm:", sharkForm);
    try {
      axios
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

  const onReset = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSharkForm(initialState);
  };

  const getData = React.useCallback(() => {
    axios
      .get(`${baseApiURL}/whole-list`)
      .then(({ data }) => {
        // console.log("data:", data);
        const dataToSet = data?.list;
        setSharksList(dataToSet);
      })
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  const deleteShark = (id: number) => {
    // console.log({ id });
    try {
      axios
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

  const SharksTable = (): JSX.Element => {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Weight</th>
            <th>Delete</th>
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
                  <Button onClick={() => deleteShark(shark?.ID!)} variant="danger" size="sm">
                    Delete
                  </Button>
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
      <h1 className="text-center py-4">Sharks List</h1>
      {sharksList?.length ? <SharksTable /> : null}
      <br />
      <AddShark sharkForm={sharkForm} onChange={onChange} onSubmit={onSubmit} onReset={onReset} />
    </React.Fragment>
  );
};

export default App;

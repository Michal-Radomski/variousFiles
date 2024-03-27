import React from "react";
import axios from "axios";
import { Button, ButtonGroup, Form, Table } from "react-bootstrap";

import "./App.scss";

const baseApiURL = "http://localhost:4000/api";

const App = (): JSX.Element => {
  const [sharksList, setSharksList] = React.useState<Shark[]>([]);

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
                  <Button onClick={() => deleteShark(shark?.ID)} variant="danger" size="sm">
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

  const AddShark = () => {
    return (
      <Form style={{ width: "50%", margin: "1rem auto" }}>
        <h4>Add a New Shark</h4>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Shark Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Shark Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Shark Color</Form.Label>
          <Form.Control type="text" placeholder="Enter Shark Color" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formWeight">
          <Form.Label>Shark Weight</Form.Label>
          <Form.Control type="number" placeholder="Enter Shark Weight" />
        </Form.Group>

        <ButtonGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" type="reset">
            Reset
          </Button>
        </ButtonGroup>
      </Form>
    );
  };

  return (
    <React.Fragment>
      <h1 className="text-center py-4">Sharks List</h1>
      {sharksList?.length ? <SharksTable /> : null}
      <br />
      <AddShark />
    </React.Fragment>
  );
};

export default App;

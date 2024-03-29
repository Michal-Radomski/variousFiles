import React from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";

import "./App.scss";
import AddShark from "./AddShark";

const baseApiURL = "http://localhost:4000/api";

const GET_SHARKS = gql`
  query sharksFromDB {
    sharks {
      ID
      name
      color
      weight
    }
  }
`;

const App = (): JSX.Element => {
  const { loading, error, data, refetch } = useQuery(GET_SHARKS);

  const initialState: Shark = { name: "", color: "", weight: 0 };

  const [sharksList, setSharksList] = React.useState<Shark[]>([]);
  const [sharkForm, setSharkForm] = React.useState<Shark>(initialState);

  //* Data from GraphQL
  React.useEffect(() => {
    (function getSharks(): void {
      if (loading) {
        console.log("loading");
      }
      if (error) {
        console.log("error.message:", error.message);
      }
      if (data) {
        // console.log("data.sharks:", data.sharks);
        const currentTime = new Date();
        console.log(
          "GraphQL:",
          data?.sharks?.length,
          currentTime.toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit",
            second: "numeric",
          }) + `.${currentTime.getMilliseconds()}`
        );
        return setSharksList(data?.sharks);
      }
    })();
  }, [data, error, loading]);

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
        // getData(); //* V1 - Rest Api
        refetch(); //* V2 - GraphQL
        setSharkForm(initialState);
      }, 500);
    }
  };

  const onReset = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSharkForm(initialState);
  };

  //* Data from REST API
  const getData = React.useCallback(() => {
    axios
      .get(`${baseApiURL}/whole-list`)
      .then(({ data }) => {
        // console.log("data:", data);
        const dataToSet = data?.list;
        const currentTime = new Date();
        console.log(
          "Rest Api:",
          dataToSet?.length,
          currentTime.toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit",
            second: "numeric",
          }) + `.${currentTime.getMilliseconds()}`
        );
        // setSharksList(dataToSet);
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
        // getData(); //* V1 - Rest Api
        refetch(); //* V2 - GraphQL
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
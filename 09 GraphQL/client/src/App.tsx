import React from "react";
import axios from "axios";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";

import "./App.scss";
import SharkForm from "./SharkForm";
import { DELETE_SHARK, GET_SHARKS, ADD_SHARK, EDIT_SHARK } from "./queries";

const baseApiURL = "http://localhost:4000/api";

const App = (): JSX.Element => {
  const { loading, error, data, refetch } = useQuery(GET_SHARKS);
  const [deleteSharkGraphQL, { data: dataDelete, loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_SHARK);

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

  const onChange = (event: React.ChangeEvent<HTMLFormElement>): void => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log({ name, value });
    setSharkForm({
      ...sharkForm,
      [name]: value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // console.log("sharkForm:", sharkForm);
    try {
      sharkForm.hasOwnProperty("ID")
        ? //* Edit an existing shark
          axios
            .put(`${baseApiURL}/shark/${sharkForm?.ID}`, sharkForm)
            .then(({ data }) => {
              console.log("data:", data);
            })
            .catch((error) => console.error(error))
        : //* Create a new Shark
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

  const onReset = (event: React.FormEvent<HTMLFormElement>): void => {
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

  React.useEffect(() => {
    if (loadingDelete) {
      console.log("loading");
    }
    if (errorDelete) {
      console.log("errorDelete.message:", errorDelete.message);
    }
    if (dataDelete) {
      console.log("dataDelete:", dataDelete);
    }
  }, [dataDelete, errorDelete, loadingDelete]);

  const deleteShark = async (id: number): Promise<void> => {
    // console.log({ id });
    try {
      //* V1 Rest Api
      // await axios
      //   .delete(`${baseApiURL}/delete/${id}`)
      //   .then(({ data }) => {
      //     console.log("data:", data);
      //   })
      //   .catch((error) => console.error(error));

      //* V2 GraphQL
      await deleteSharkGraphQL({ variables: { ID: id } });
    } finally {
      setTimeout(() => {
        // getData(); //* V1 - Rest Api
        refetch(); //* V2 - GraphQL
      }, 500);
    }
  };

  const editShark = (id: number): void => {
    const sharkToEdit = sharksList?.filter((elem: Shark) => elem?.ID === id)?.[0];
    // console.log("sharkToEdit:", sharkToEdit);
    setSharkForm(sharkToEdit);
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
      <h1 className="text-center py-4">Sharks List</h1>
      {sharksList?.length ? <SharksTable /> : null}
      <br />
      <SharkForm sharkForm={sharkForm} onChange={onChange} onSubmit={onSubmit} onReset={onReset} />
    </React.Fragment>
  );
};

export default App;

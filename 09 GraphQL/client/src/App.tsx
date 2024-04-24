import React from "react";
import axios from "axios";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
// import { parse } from "graphql";

import "./App.scss";
import SharkForm from "./SharkForm";
import { DELETE_SHARK, GET_SHARKS, ADD_SHARK, EDIT_SHARK } from "./queries";

// console.log("parse:", parse);
// const readableQuery = parse("query sharksFromDB {\n sharks {\n ID\n name\n color\n weight\n __typename\n }\n}");
// console.log("readableQuery:", readableQuery);

const baseApiURL = "http://localhost:4000/api";

const App = (): JSX.Element => {
  //* GraphQL hooks
  const { loading: loadingGet, error: errorGet, data: dataGet, refetch } = useQuery(GET_SHARKS);
  const [deleteSharkGraphQL, { data: dataDelete, loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_SHARK);
  const [addSharkGraphQL, { data: dataAdd, loading: loadingAdd, error: errorAdd }] = useMutation(ADD_SHARK);
  const [editSharkGraphQL, { data: dataEdit, loading: loadingEdit, error: errorEdit }] = useMutation(EDIT_SHARK);

  //* Local State
  const initialState: Shark = { name: "", color: "", weight: 0 };

  const [sharksList, setSharksList] = React.useState<Shark[]>([]);
  const [sharkForm, setSharkForm] = React.useState<Shark>(initialState);

  //* V1- Get data using REST API
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

  //* V2 - Get data using GraphQL and set state
  React.useEffect(() => {
    (async function getSharks(): Promise<void> {
      if (loadingGet) {
        console.log("loadingGet");
      }
      if (errorGet) {
        console.log("errorGet.message:", errorGet.message);
      }
      if (dataGet) {
        // console.log("dataGet.sharks:", dataGet.sharks);
        const currentTime = new Date();
        console.log(
          "GraphQL:",
          dataGet?.sharks?.length,
          currentTime.toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit",
            second: "numeric",
          }) + `.${currentTime.getMilliseconds()}`
        );
        return await setSharksList(dataGet?.sharks);
      }
    })();
  }, [dataGet, errorGet, loadingGet]);

  //* GraphQL hooks
  React.useEffect(() => {
    if (loadingDelete) {
      console.log("loadingDelete");
    }
    if (errorDelete) {
      console.log("errorDelete.message:", errorDelete.message);
    }
    if (dataDelete) {
      console.log("dataDelete:", dataDelete);
    }
    if (loadingAdd) {
      console.log("loadingAdd");
    }
    if (errorAdd) {
      console.log("errorAdd.message:", errorAdd.message);
    }
    if (dataAdd) {
      console.log("dataAdd:", dataAdd);
    }
    if (loadingEdit) {
      console.log("loadingEdit");
    }
    if (errorEdit) {
      console.log("errorEdit.message:", errorEdit.message);
    }
    if (dataEdit) {
      console.log("dataEdit:", dataEdit);
    }
  }, [dataAdd, dataDelete, dataEdit, errorAdd, errorDelete, errorEdit, loadingAdd, loadingDelete, loadingEdit]);

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
    const { name, color, weight } = sharkForm;
    event.preventDefault();
    // console.log("sharkForm:", sharkForm);
    try {
      sharkForm.hasOwnProperty("ID")
        ? //@ Edit an existing shark
          //* V1 Rest Api
          // await axios
          //   .put(`${baseApiURL}/shark/${sharkForm?.ID}`, sharkForm)
          //   .then(({ data }) => {
          //     console.log("data:", data);
          //   })
          //   .catch((error) => console.error(error))
          //* V2 GraphQL
          await editSharkGraphQL({ variables: { ID: sharkForm?.ID, name, color, weight: Number(weight) } })
        : //@ Create a new Shark
          //* V1 - Rest Api
          // await axios
          //   .post(`${baseApiURL}/add-item`, sharkForm)
          //   .then(({ data }) => {
          //     console.log("data:", data);
          //   })
          //   .catch((error) => console.error(error));
          //* V2 - GraphQL
          await addSharkGraphQL({ variables: { name, color, weight: Number(weight) } });
    } finally {
      setTimeout(() => {
        // getData(); //* V1 - Rest Api
        refetch(); //* V2 - GraphQL
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
      <h1 className="text-center py-4">Sharks List</h1>
      {sharksList?.length ? <SharksTable /> : null}
      <br />
      <SharkForm sharkForm={sharkForm} onChange={onChange} onSubmit={onSubmit} onReset={onReset} />
    </React.Fragment>
  );
};

export default App;

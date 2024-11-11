import React from "react";
import { NextRouter, useRouter } from "next/router";

import { TodoI } from "@/Interfaces";
import { Button, ButtonGroup } from "react-bootstrap";

const TodoDetail = ({ selectedTodo, url }: { selectedTodo: TodoI; url: string }): JSX.Element => {
  // console.log({ selectedTodo, url });

  const router: NextRouter = useRouter();

  const [todo, setTodo] = React.useState<TodoI>(selectedTodo);

  const handleComplete = async (): Promise<void> => {
    if (!todo?.completed) {
      const newTodo: TodoI = { ...todo, completed: true } as TodoI;

      await fetch(url + "/" + todo._id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      setTodo(newTodo);
    }
  };

  const handleDelete = async (): Promise<void> => {
    await fetch(url + "/" + todo?._id, {
      method: "DELETE",
    });
    router.push("/");
  };

  return (
    <div>
      <h1>{todo.item}</h1>
      <h2>{todo.completed ? "completed" : "incomplete"}</h2>
      <ButtonGroup>
        <Button variant="warning" onClick={handleComplete}>
          Complete
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          variant="success"
          onClick={() => {
            router.push("/");
          }}
        >
          Go Back
        </Button>
      </ButtonGroup>
    </div>
  );
};

export async function getServerSideProps(context: { query: { id: string } }) {
  // console.log("context.query.id:", context.query.id);
  const res: Response = await fetch((process.env.API_URL as string) + "/" + context.query.id);
  const selectedTodo = (await res.json()) as TodoI;

  return { props: { selectedTodo, url: process.env.API_URL } };
}

export default TodoDetail;

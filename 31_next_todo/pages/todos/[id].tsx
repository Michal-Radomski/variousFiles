import React from "react";
import { NextRouter, useRouter } from "next/router";

import { TodoI } from "@/Interfaces";

// Define Component
const TodoDetail = ({ selectedTodo, url }: { selectedTodo: TodoI; url: string }): JSX.Element => {
  console.log({ selectedTodo, url });

  const router: NextRouter = useRouter();

  // set the todo as state for modification
  const [todo, setTodo] = React.useState<TodoI>(selectedTodo);

  // function to complete a todo
  const handleComplete = async (): Promise<void> => {
    if (!todo.completed) {
      // make copy of todo with completed set to true
      const newTodo: TodoI = { ...todo, completed: true } as TodoI;
      // make api call to change completed in database
      await fetch(url + "/" + todo._id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        // send copy of todo with property
        body: JSON.stringify(newTodo),
      });
      // once data is updated update state so ui matches without needed to refresh
      setTodo(newTodo);
    }
    // if completed is already true this function won't do anything
  };

  // function for handling clicking the delete button
  const handleDelete = async (): Promise<void> => {
    await fetch(url + "/" + todo._id, {
      method: "delete",
    });
    //push user back to main page after deleting
    router.push("/");
  };

  return (
    <div>
      <h1>{todo.item}</h1>
      <h2>{todo.completed ? "completed" : "incomplete"}</h2>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

// Define Server Side Props
export async function getServerSideProps(context: { query: { id: string } }) {
  console.log("context.query.id:", context.query.id);
  const res = await fetch((process.env.API_URL as string) + "/" + context.query.id);
  const selectedTodo = await res.json();

  //return the serverSideProps the todo and the url from out env variables for frontend api calls
  return { props: { selectedTodo, url: process.env.API_URL } };
}

// export component
export default TodoDetail;
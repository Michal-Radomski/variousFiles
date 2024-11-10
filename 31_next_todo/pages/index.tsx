import React from "react";
import Head from "next/head";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { TodoI } from "@/Interfaces";

const HomePage = ({ todos }: { todos: TodoI[] }): JSX.Element => {
  // const [todos, setTodos] = React.useState<TodoI[]>([]);

  const fetchTodos = async (): Promise<void> => {
    // const response: Response = await fetch("/api/todos");
    // const data = (await response.json()) as TodoI[];
    // setTodos(data);
  };

  // React.useEffect(() => {
  //   fetchTodos();
  // }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Next App with Mongo Exercise</title>
        <meta name="description" content="Next App with Mongo Exercise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>My Todo List</h1>
          <TodoForm onAdd={fetchTodos} />
          <TodoList todos={todos} />
        </div>
      </main>
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  const response: Response = await fetch(`${process.env.API_URL as string}/api/todos`);
  const todos = (await response.json()) as TodoI[];

  // return props
  return {
    props: { todos },
  };
}

export default HomePage;

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "react-bootstrap";

import TodoList from "../components/TodoList";
import { TodoI } from "@/Interfaces";

const HomePage = ({ todos }: { todos: TodoI[] }): JSX.Element => {
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
          <Link href="/todos/create">
            <Button variant="primary">Create a New Todo</Button>
          </Link>
          <TodoList todos={todos} />
        </div>
      </main>
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  const response: Response = await fetch(process.env.API_URL as string);
  const todos = (await response.json()) as TodoI[];

  return {
    props: { todos },
  };
}

export default HomePage;

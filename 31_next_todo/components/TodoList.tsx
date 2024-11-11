import React from "react";
import Link from "next/link";

import { TodoI } from "@/Interfaces";

const TodoList = ({ todos }: { todos: TodoI[] }): JSX.Element => {
  // console.log("todos:", todos);

  return (
    <React.Fragment>
      <div>
        <br />
        <h3>Click On Todo to see it individually</h3>
        {todos.map(
          (todo: TodoI): JSX.Element => (
            <div key={todo._id as string}>
              <Link href={`todos/${todo._id}`}>
                <h5 style={{ cursor: "pointer" }}>
                  {todo.item} - {todo.completed ? "completed" : "incomplete"} {todo?._id as string}
                </h5>
              </Link>
            </div>
          )
        )}
      </div>
    </React.Fragment>
  );
};

export default TodoList;

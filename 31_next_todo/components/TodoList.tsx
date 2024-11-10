import React from "react";
import Link from "next/link";

import { TodoI } from "@/Interfaces";

const TodoList = ({ todos }: { todos: TodoI[] }): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h3>Click On Todo to see it individually</h3>
        {todos.map(
          (todo: TodoI): JSX.Element => (
            <div key={todo._id as string}>
              <Link href={`api/${todo._id}`}>
                <h3 style={{ cursor: "pointer" }}>
                  {todo.item} - {todo.completed ? "completed" : "incomplete"}
                </h3>
              </Link>
            </div>
          )
        )}
      </div>
    </React.Fragment>
  );
};

export default TodoList;

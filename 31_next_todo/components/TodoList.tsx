import { TodoI } from "@/Interfaces";

import React from "react";

const TodoList = ({ todos }: { todos: TodoI[] }): JSX.Element => {
  return (
    <React.Fragment>
      <ul>
        {todos.map(
          (todo: TodoI): JSX.Element => (
            <li key={todo._id as string}>{todo.item}</li>
          )
        )}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;

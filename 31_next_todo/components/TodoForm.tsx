import React from "react";

const TodoForm = ({ onAdd }: { onAdd: () => void }): JSX.Element => {
  const [item, setItem] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item }),
    });
    onAdd();
    setItem("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(event) => setItem(event.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
    </React.Fragment>
  );
};

export default TodoForm;

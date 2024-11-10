import React from "react";
import { useRouter } from "next/router";

const TodoForm = ({ url }: { url: string }): JSX.Element => {
  const router = useRouter();

  const [item, setItem] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item }),
    });
    setItem("");
    router.push("/");
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

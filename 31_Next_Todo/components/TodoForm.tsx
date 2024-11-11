import React from "react";
import { NextRouter, useRouter } from "next/router";

const TodoForm = ({ url }: { url: string }): JSX.Element => {
  const router: NextRouter = useRouter();

  const [item, setItem] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item }),
      });
      await setItem("");
      router.push("/");
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="row g-3 mb-3">
        <div className="col-auto">
          <input
            value={item}
            onChange={(event) => setItem(event.target.value)}
            required={true}
            className="form-control"
            placeholder="enter todo..."
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add Todo
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TodoForm;

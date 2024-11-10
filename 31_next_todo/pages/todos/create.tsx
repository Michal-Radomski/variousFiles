import React from "react";
import { useRouter } from "next/router";

import { TodoI } from "@/Interfaces";

// Define Component
function Create({ url }: { url: string }) {
  // get the next route
  const router = useRouter();

  // since there is just one input we will use a uncontrolled form
  const item = React.useRef<HTMLInputElement>(null);

  // Function to create new todo
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    // construct new todo, create variable, check it item.current is not null to pass type checks
    let todo: TodoI = { item: "", completed: false } as TodoI;
    if (null !== item.current) {
      todo = { item: item.current.value, completed: false } as TodoI;
    }

    // Make the API request
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    // after api request, push back to main page
    router.push("/");
  };

  return (
    <div>
      <h1>Create a New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={item}></input>
        <input type="submit" value="create todo"></input>
      </form>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      url: process.env.API_URL,
    },
  };
}

export default Create;

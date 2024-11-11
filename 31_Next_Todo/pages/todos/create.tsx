import React from "react";

import TodoForm from "@/components/TodoForm";

function Create({ url }: { url: string }): JSX.Element {
  return <TodoForm url={url} />;
}

export async function getStaticProps() {
  return {
    props: {
      url: process.env.API_URL,
    },
  };
}

export default Create;

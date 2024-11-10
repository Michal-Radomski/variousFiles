import React from "react";

import TodoForm from "@/components/TodoForm";

// Define Component
function Create({ url }: { url: string }) {
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

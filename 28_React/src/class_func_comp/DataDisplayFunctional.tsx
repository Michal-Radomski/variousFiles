import React from "react";

import useFetch from "./useFetch";

interface Item {
  id: number;
  name: string;
}

const DataDisplayFunctional: React.FC<{ url: string }> = ({ url }: { url: string }) => {
  const { data, loading, error } = useFetch<Item[]>(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3 style={{ fontWeight: "bold", textDecoration: "underline" }}>Functional Component</h3>
      {data && data?.map((item: Item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};

export default DataDisplayFunctional;

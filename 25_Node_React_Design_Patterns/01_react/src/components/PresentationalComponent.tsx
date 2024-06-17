// Presentational Component
import React from "react";

const PresentationalComponent = ({ data }: { data: User[] }) => (
  <React.Fragment>
    <ul>
      {data.map((item: User) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </React.Fragment>
);

export default PresentationalComponent;

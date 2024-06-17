// Container Component
import React from "react";

import PresentationalComponent from "./PresentationalComponent";

const ContainerComponent = (): JSX.Element => {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <PresentationalComponent data={data} />;
};

export default ContainerComponent;

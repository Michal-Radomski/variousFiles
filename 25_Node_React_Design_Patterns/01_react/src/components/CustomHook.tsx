// Custom Hook Example
import React from "react";

const useFetchData = (url: string): User[] => {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

export default useFetchData;

import React from "react";

import "./App.scss";
import ContainerComponent from "./components/ContainerComponent";
import HOC from "./components/HOC";
import RenderProps from "./components/RenderProps";
import useFetchData from "./components/CustomHook";
import CompoundComponent from "./components/CompoundComponent";

const App = (): JSX.Element => {
  const data: User[] = useFetchData("https://jsonplaceholder.typicode.com/users");
  // console.log("data:", data);

  return (
    <React.Fragment>
      <h1>Design Patterns in React</h1>
      <br />
      <br />
      <p className="info">Container Component</p>
      <ContainerComponent />
      <br />
      <br />
      <p className="info">HOC</p>
      <HOC />
      <br />
      <br />
      <p className="info">Render Props</p>
      <RenderProps />
      <br />
      <br />
      <p className="info">Custom Hook</p>
      {data ? (
        <React.Fragment>
          <ul>
            {data.map((item: User) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </React.Fragment>
      ) : null}
      <br></br>
      <p className="info">Compound Component</p>
      <CompoundComponent />
    </React.Fragment>
  );
};

export default App;

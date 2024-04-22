import React from "react";
import styled from "styled-components";

import "./App.scss";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
  h2 {
    color: red;
  }
  h4 {
    color: blue;
  }
  h6 {
    color: green;
  }
`;

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <AppContainer>
        <h1>React + Docker Exercise - live update</h1>
        <h2>React + Docker Exercise - live update2</h2>
        <h4>React + Docker Exercise - live update3</h4>
        <h6>React + Docker Exercise - live update4</h6>
      </AppContainer>
    </React.Fragment>
  );
};

export default App;

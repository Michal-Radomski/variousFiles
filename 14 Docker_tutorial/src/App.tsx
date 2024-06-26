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
`;

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <AppContainer>
        <h1>React + Docker Exercise - Live update</h1>
        <h2>React + Docker Exercise - Live update2</h2>
      </AppContainer>
    </React.Fragment>
  );
};

export default App;

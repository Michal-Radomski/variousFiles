import React from "react";
import styled from "styled-components";

import "./App.scss";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <AppContainer>
        <h1>React + Docker Exercise</h1>
      </AppContainer>
    </React.Fragment>
  );
};

export default App;

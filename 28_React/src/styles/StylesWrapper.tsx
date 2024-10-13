import React from "react";
import Button from "./StyledButton";

const StylesWrapper = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h3>Emotion library</h3>
        <div>
          <Button primary label="Primary Button" />
          <Button label="Secondary Button" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default StylesWrapper;

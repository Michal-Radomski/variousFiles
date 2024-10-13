import React from "react";

import EmotionButton from "./StyledButton";
import JSSButton from "./JSS_Button";
import StyledComponentsButton from "./StyledComponentsButton";

const StylesWrapper = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h3>Emotion library</h3>
        <div>
          <EmotionButton primary={true} label="Primary Button" />
          <EmotionButton label="Secondary Button" />
        </div>
      </div>

      <div>
        <h3>React-JSS library</h3>
        <div>
          <JSSButton primary={true} label="Primary Button" />
          <JSSButton label="Secondary Button" />
        </div>
      </div>

      <div>
        <h3>Styled-Components library</h3>
        <div>
          <StyledComponentsButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default StylesWrapper;

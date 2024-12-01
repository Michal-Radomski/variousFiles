import React from "react";
import styled from "styled-components";

const ClipPathWrapper = styled.div`
  .card {
    width: 300px;
    height: 200px;
    margin: 20px auto;
    background-color: white;
    border-radius: 10px;
    position: relative;
    overflow: hidden; /* Ensures content doesn't overflow */
  }

  .inner {
    background-color: turquoise;
    width: 100%;
    height: 100%;
    padding: 20px;
    clip-path: circle(30% at 70% 30%); /* Initial clip-path */
    transition: clip-path 0.5s ease-in-out; /* Smooth transition */
  }

  .card:hover .inner {
    clip-path: circle(100% at 50% 50%); /* Expand on hover */
  }
`;

const ClipPathCard = (): JSX.Element => {
  return (
    <React.Fragment>
      <ClipPathWrapper>
        <div className="card">
          <div className="inner">
            <h1>Hello World</h1>
            <p>This is a card with a clip-path effect.</p>
          </div>
        </div>
      </ClipPathWrapper>
    </React.Fragment>
  );
};

export default ClipPathCard;

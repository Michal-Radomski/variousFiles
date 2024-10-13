/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const buttonStyle = css`
  background-color: hotpink;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: darkviolet;
  }
`;

const PragmaButton: React.FC<{ label: string }> = ({ label }): JSX.Element => {
  return <button css={buttonStyle}>{label}</button>;
};

export default PragmaButton;

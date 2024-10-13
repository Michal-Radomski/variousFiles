/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  primary?: boolean;
  label?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button: React.FC<ButtonProps> = ({ primary, label }): JSX.Element => {
  return <StyledButton primary={primary}>{label}</StyledButton>;
};

export default Button;

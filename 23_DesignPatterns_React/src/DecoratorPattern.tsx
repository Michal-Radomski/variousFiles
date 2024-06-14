//* 2. Structural Patterns
// Structural patterns deal with object composition. One commonly used structural pattern in React is the Decorator Pattern (often implemented as Higher-Order Components or HOCs).
// Example: Decorator Pattern
// The Decorator Pattern can be used to enhance components with additional functionality.

import React from "react";

// Simple component
const Button = ({ onClick, label }: { onClick?: React.MouseEventHandler<HTMLButtonElement>; label?: string }) => (
  <button onClick={onClick}>{label}</button>
);

// HOC to log clicks
const withClickLogger = (
  WrappedComponent: React.FC<{ onClick?: React.MouseEventHandler<HTMLButtonElement>; label?: string }>
) => {
  return class extends React.Component<{ onClick?: Function; label?: string }> {
    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Button clicked");
      this.props.onClick && this.props.onClick(event);
    };

    render() {
      return <WrappedComponent {...this.props} onClick={this.handleClick} />;
    }
  };
};

// Enhanced component
const ButtonWithLogging = withClickLogger(Button);

const DecoratorPattern = (): JSX.Element => {
  return (
    <React.Fragment>
      <ButtonWithLogging label="Click Me" />
    </React.Fragment>
  );
};

export default DecoratorPattern;

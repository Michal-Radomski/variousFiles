//* 1. Creational Patterns
// Creational patterns deal with object creation mechanisms. One commonly used creational pattern in React is the Factory Pattern.
// Example: Factory Pattern
// The Factory Pattern can be used to dynamically create React components.

import React from "react";

type Props = {
  [key: string]: any;
};

// Define a set of components
const Button = (props: Props): JSX.Element => <button {...props}>{props.label}</button>;
const Link = (props: Props): JSX.Element => <a href={props.href}>{props.label}</a>;
const TextInput = (props: Props): JSX.Element => <input type="text" {...props} />;

// Component factory
const componentFactory = (type: string, props: Props): JSX.Element | null => {
  const components = {
    button: Button,
    link: Link,
    textInput: TextInput,
  };
  const Component = components[type as keyof typeof components];
  return Component ? <Component {...props} /> : null;
};

const FactoryPattern = (): JSX.Element => {
  return (
    <React.Fragment>
      {componentFactory("button", { label: "Click Me" })}
      <br />
      {componentFactory("link", { href: "#", label: "Go to Link" })}
      <br />
      {componentFactory("textInput", { placeholder: "Enter text" })}
    </React.Fragment>
  );
};

export default FactoryPattern;

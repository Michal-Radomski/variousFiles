import React from "react";

const LogComponent = (_target: Object, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const original = descriptor.value;
  // console.log("original:", original);
  // console.log("_target:", _target);

  descriptor.value = function (...args: string[]) {
    console.log(`${key} is mounted with args:`, args);
    return original.apply(this, args);
  };

  return descriptor;
};

class DecoratorComponent extends React.Component<{ message: string }> {
  @LogComponent
  componentDidMount() {
    // This will log when the component is mounted
    console.log("this.props.message:", this.props.message);
  }

  render(): JSX.Element {
    return <div>{this.props.message}</div>;
  }
}

const Decorator: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <DecoratorComponent message="Hello, Decorators!" />
    </React.Fragment>
  );
};

export default Decorator;

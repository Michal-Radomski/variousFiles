import React from "react";

//* Define the HOC with proper type annotations
const withPropsLogger = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  // console.log(1, "test");
  return class extends React.Component<P> {
    componentDidMount(): void {
      // console.log(2, "test2");
    }

    componentDidUpdate(prevProps: P): void {
      console.log("Old props:", prevProps);
      console.log("New props:", this.props);
    }

    render() {
      // Pass all props to the wrapped component
      return <WrappedComponent {...this.props} />;
    }
  };
};

//* Example of a component to be wrapped
interface MyComponentProps {
  name: string;
}

class MyComponent extends React.Component<MyComponentProps> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

//* Wrap MyComponent with the HOC
const MyComponentWithPropsLogger = withPropsLogger(MyComponent);

//* Example usage
const HOC: React.FC = () => (
  <React.Fragment>
    <MyComponentWithPropsLogger name="World" />
  </React.Fragment>
);

export default HOC;

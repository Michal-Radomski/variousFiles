//* A HOC is a function that takes a component as an argument and returns a new component with additional props or behavior.
import React from "react";

// Define the HOC
function withHover<T>(WrappedComponent: React.ComponentType<T>): (props: T) => JSX.Element {
  return function EnhancedComponent(props: T): JSX.Element {
    // console.log("props:", props);
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    const handleMouseOver = (): void => setIsHovered(true);
    const handleMouseOut = (): void => setIsHovered(false);

    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <WrappedComponent {...props} isHovered={isHovered} />
      </div>
    );
  };
}

// Example usage
type TextComponentProps = {
  text: string;
  isHovered?: boolean;
};

const TextComponent = ({ text, isHovered }: TextComponentProps): JSX.Element => {
  // console.log(text, isHovered);
  return <p style={{ backgroundColor: isHovered ? "blue" : "white" }}>{text}</p>;
};

const HoverText: (props: TextComponentProps) => JSX.Element = withHover(TextComponent);

const ComponentHOC = (): JSX.Element => {
  return (
    <React.Fragment>
      <HoverText text="Hello, world!" />
    </React.Fragment>
  );
};

export default ComponentHOC;

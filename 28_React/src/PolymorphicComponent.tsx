import React from "react";

//* Helper function to generate class names based on props
const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = "";

  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + " ";
  }

  return classNames.trim();
};

//* Define the type for our own props
type ButtonOwnProps<E extends React.ElementType = "button"> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
  as?: E; // The element type
};

//* Combine our props with the props of the element we're rendering
type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> & Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement: "button" = "button";

const Button = <E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as, // Optional 'as' prop to specify the element type
}: ButtonProps<E>): JSX.Element => {
  const classNames: string = createClassNames({ primary, secondary, destructive });

  const TagName: E | typeof defaultElement = (as || defaultElement) as any;

  return <TagName className={classNames}>{children}</TagName>;
};

const PolymorphicComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        {/* Rendered as button */}
        <Button primary>Primary</Button>

        {/* Rendered as anchor */}
        <Button as="a" href="#">
          Link
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PolymorphicComponent;

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }): JSX.Element => {
  console.log("Button rendered:", label);
  return <button onClick={onClick}>{label}</button>;
};

// Memoized version of the Button component
const MemoizedButton: React.NamedExoticComponent<ButtonProps> = React.memo(Button);

const ReactMemo = (): JSX.Element => {
  const handleClick = (): void => {
    console.log("Button clicked");
  };

  return (
    <React.Fragment>
      <div>
        <h1>React.memo Example</h1>
        {/* The MemoizedButton will only re-render if its props change */}
        <MemoizedButton label="Click Me" onClick={handleClick} />
      </div>
    </React.Fragment>
  );
};

export default ReactMemo;

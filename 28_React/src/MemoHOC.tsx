import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }): JSX.Element => {
  console.log(`Rendering Button with label: ${label}`);

  return <button onClick={onClick}>{label}</button>;
};

const MemoizedButton: React.NamedExoticComponent<ButtonProps> = React.memo(Button);

const MemoHOC = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0);

  const handleButtonClick = (): void => {
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      <div>
        <h1>Count: {count}</h1>
        <MemoizedButton label="Increment" onClick={handleButtonClick} />
      </div>
    </React.Fragment>
  );
};

export default MemoHOC;

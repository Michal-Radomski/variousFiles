import React from "react";

function ClickableComponent(): JSX.Element {
  const buttonRef: React.RefObject<HTMLButtonElement> = React.useRef<HTMLButtonElement>(null);

  const handleClick = (): void => {
    console.log("Button was clicked!");
  };

  const triggerClick = (): void => {
    buttonRef.current?.click(); // Programmatically trigger the click
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Click Me Programmatically
      </button>
      <button onClick={triggerClick}>Trigger Click Programmatically</button>
    </div>
  );
}

export default ClickableComponent;

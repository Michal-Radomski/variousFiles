import React from "react";

const CombineStyles = (): JSX.Element => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);
  // console.log({ isPressed });

  const handleMouseDown = (): void => setIsPressed(true);
  const handleMouseUp = (): void => setIsPressed(false);

  const baseStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const pressedStyle = {
    backgroundColor: "darkblue",
  };

  return (
    <React.Fragment>
      <button
        //* It doesn't work!
        // style={isPressed ? [baseStyle, pressedStyle] : baseStyle}
        style={isPressed ? Object.assign({}, baseStyle, pressedStyle) : baseStyle}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        Press Me
      </button>
    </React.Fragment>
  );
};

export default CombineStyles;

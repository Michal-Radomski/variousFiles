import React from "react";

const MyForm = (): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevents the form from submitting
    console.log("Form submission prevented");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

const MyComponent = (): JSX.Element => {
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation(); // Prevents the event from bubbling up
    console.log("Button clicked");
  };

  const handleClickDiv = (): void => {
    console.log("Div clicked");
  };

  return (
    <div onClick={handleClickDiv}>
      <button onClick={handleClickButton}>Click Me 1</button>
    </div>
  );
};

const MyComponent2 = (): JSX.Element => {
  const handleClickButton1 = (event: React.MouseEvent): void => {
    // event.stopImmediatePropagation(); // Stops other handlers on the button //* Property 'stopImmediatePropagation' does not exist on type 'MouseEvent<Element, MouseEvent>'.
    console.log("Button handler 1 executed");
  };

  const handleClickButton2 = (): void => {
    console.log("Button handler 2 will not execute");
  };

  return (
    <button onClick={handleClickButton1} onMouseDown={handleClickButton2}>
      Click Me 2
    </button>
  );
};

const MyComponent3 = (): JSX.Element => {
  const handleClickButton1 = (event: React.MouseEvent): void => {
    // event.stopImmediatePropagation(); // Stops other handlers on the button //* Property 'stopImmediatePropagation' does not exist on type 'MouseEvent<Element, MouseEvent>'.
    console.log("Button handler 1 executed");
  };

  const handleClickButton2 = (): void => {
    console.log("Button handler 2 will not execute");
  };

  return (
    <button
      onClick={(e) => {
        handleClickButton1(e);
        handleClickButton2(); // This will not be executed due to stopImmediatePropagation
      }}
    >
      Click Me 3
    </button>
  );
};

const EventMethods = (): JSX.Element => {
  return (
    <React.Fragment>
      <MyForm />
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
    </React.Fragment>
  );
};

export default EventMethods;

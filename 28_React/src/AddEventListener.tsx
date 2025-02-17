import React from "react";

const AddEventListener = (): JSX.Element => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const documentRef = React.useRef<Document>(document);

  const onClick = (event: MouseEvent): void => {
    console.log("button clicked!", event);
  };

  const onVisibilityChange = (event: Event): void => {
    console.log("doc visibility changed!", {
      isVisible: !document.hidden,
    });
    console.log("event:", event);
  };

  React.useEffect(() => {
    const button = buttonRef.current as HTMLButtonElement;
    const doc = documentRef.current as Document;

    if (button) {
      button.addEventListener("click", onClick);
    }

    if (doc) {
      doc.addEventListener("visibilitychange", onVisibilityChange);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", onClick);
      }
      if (doc) {
        doc.removeEventListener("visibilitychange", onVisibilityChange);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div>
        <button ref={buttonRef}>Click me</button>
      </div>
    </React.Fragment>
  );
};

export default AddEventListener;

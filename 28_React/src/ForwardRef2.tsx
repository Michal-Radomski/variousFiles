import React from "react";

interface SearchProps {
  // Add any props you need here
}

const Search: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLInputElement>> = React.forwardRef<
  HTMLInputElement,
  SearchProps
>((_props: object, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element => {
  return <input ref={ref} type="search" />;
});

const ForwardRef2 = (): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <React.Fragment>
      <div>
        <Search ref={inputRef} />
      </div>
    </React.Fragment>
  );
};

export default ForwardRef2;

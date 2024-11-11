import React, { createContext, use } from "react";

const ThemeContext = createContext("light");

function ThemeContextComponent({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <React.Fragment>
      <ThemeContext.Provider value="dark">
        <Panel title="Welcome" />
        {children}
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

function Panel({ title }: { title: string }): JSX.Element {
  const theme = use(ThemeContext); // Using the new `use` hook
  return <h1 className={`panel-${theme}`}>{title}</h1>;
}

export default ThemeContextComponent;

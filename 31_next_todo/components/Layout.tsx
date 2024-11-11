import React from "react";

function Layout(props: { children: React.ReactNode }): JSX.Element {
  return (
    <React.Fragment>
      <div className="div-center">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;

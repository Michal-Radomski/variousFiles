import React from "react";

import PersonForm from "./UseId";

const HooksWrapper = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h3>useId hook</h3>
        <h4>Person Form</h4>
        <PersonForm />
        <PersonForm /> {/* This will render another instance with unique IDs */}
      </div>
    </React.Fragment>
  );
};

export default HooksWrapper;

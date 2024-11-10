import React from "react";

const PersonForm: React.FC = (): JSX.Element => {
  const id = React.useId(); // Generate a unique ID
  console.log({ id });

  return (
    <React.Fragment>
      <div id={id}>{id}</div>

      <form>
        <div>
          <label htmlFor={`${id}-firstName`}>First Name:</label>
          <input id={`${id}-firstName`} type="text" />
        </div>
        <div>
          <label htmlFor={`${id}-lastName`}>Last Name:</label>
          <input id={`${id}-lastName`} type="text" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default PersonForm;

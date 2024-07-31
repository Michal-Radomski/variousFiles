import React from "react";

// Define the props interface
interface DefaultPropsInterface {
  name?: string; // Optional prop
  age?: number; // Optional prop
}

//* Better way!
export const DefaultProps2: React.FC<DefaultPropsInterface> = ({ name = "Guest", age = 18 }): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h1>Hello, {name}!</h1>
        <p>You are {age} years old.</p>
      </div>
    </React.Fragment>
  );
};

//* 'defaultProps' is deprecated!
// export const DefaultProps: React.FC<DefaultPropsInterface> = ({ name, age }): JSX.Element => {
//   return (
//     <React.Fragment>
//       <div>
//         <h1>Hello, {name}!</h1>
//         <p>You are {age} years old.</p>
//       </div>
//     </React.Fragment>
//   );
// };

// //* Set default props -> 'defaultProps' is deprecated!
// DefaultProps.defaultProps = {
//   name: "Guest",
//   age: 18,
// };

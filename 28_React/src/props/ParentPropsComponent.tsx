import React from "react";
import UserProfile from "./UserProps";

const ParentPropsComponent = (): JSX.Element => {
  const user: UserProps = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  return (
    <React.Fragment>
      <div>
        <h1>Welcome to the User Props Component</h1>
        {/* Passing props using spread operator */}
        <UserProfile {...user} />
      </div>
    </React.Fragment>
  );
};

export default ParentPropsComponent;

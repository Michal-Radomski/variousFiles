import React from "react";

const UserProfile: React.FC<UserProps> = ({ name, age, email }: UserProps): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;

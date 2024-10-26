import React from "react";

// Define a type for the user data
interface User {
  name: string;
  age: number;
}

// Define the props for the HOC
interface WithUserProps {
  user: User;
}

// Create a higher-order component
function withUser<T extends WithUserProps>(
  WrappedComponent: React.ComponentType<T>
): (props: Omit<T, keyof WithUserProps>) => JSX.Element {
  return function WithUser(props: Omit<T, keyof WithUserProps>) {
    const user = { name: "Alice", age: 30 }; // Simulated user data

    // Render the wrapped component with additional props
    return <WrappedComponent {...(props as T)} user={user} />;
  };
}

// Example of a component that will use the HOC
interface UserProfileProps extends WithUserProps {}

const UserProfile: React.FC<UserProfileProps> = ({ user }): JSX.Element => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};

// Enhance UserProfile with the withUser HOC
const EnhancedUserProfile = withUser(UserProfile);

const WithComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <EnhancedUserProfile />
      </div>
    </React.Fragment>
  );
};

export default WithComponent;

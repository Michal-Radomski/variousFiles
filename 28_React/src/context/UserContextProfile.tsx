import React from "react";

import { useUserContext } from "./UserContext";

const UserContextProfile: React.FC = (): JSX.Element => {
  const { username, login, logout }: { username: string; login: (username: string) => void; logout: () => void } =
    useUserContext();

  return (
    <React.Fragment>
      <div>
        <h2>User Profile</h2>
        {username ? (
          <div>
            <p>Logged in as: {username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => login("JohnDoe")}>Login as JohnDoe</button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default UserContextProfile;

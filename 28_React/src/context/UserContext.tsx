import React from "react";

// Define the shape of the context data
interface UserContextType {
  username: string;
  login: (username: string) => void;
  logout: () => void;
}

// Create the context with a default value
const UserContext = React.createContext<UserContextType | undefined>(undefined);

// Create a provider component
const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  const [username, setUsername] = React.useState<string>("");

  const login = (name: string): void => {
    setUsername(name);
  };

  const logout = (): void => {
    setUsername("");
  };

  return <UserContext.Provider value={{ username, login, logout }}>{children}</UserContext.Provider>;
};

// Custom hook for using the UserContext
const useUserContext: () => UserContextType = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };

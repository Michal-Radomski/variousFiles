// Define an asynchronous function that fetches user data
async function fetchUserData(): Promise<{ id: number; name: string }> {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

// Use Awaited and ReturnType to extract the resolved type of the fetchUserData function - the same as interface UserData
type UserData = Awaited<ReturnType<typeof fetchUserData>>;
// interface UserData {
//   id: number;
//   name: string;
// }

// Now UserData is equivalent to { id: number; name: string }

// Example usage of the UserData type
async function displayUser(): Promise<void> {
  const user: UserData = await fetchUserData();
  console.log(`User ID: ${user.id}, User Name: ${user.name}`);
}

displayUser();

{
  //* Utils Pick
  interface Person {
    name: string;
    age: number;
    email: string;
  }

  type PickedPerson = Pick<Person, "name" | "email">;

  // Now PickedPerson has only name and email properties
  const person: PickedPerson = {
    name: "Alice",
    email: "alice@example.com",
  };
  console.log("person:", person);

  interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
  }

  // Create a public profile type with limited information
  type PublicEmployeeProfile = Pick<Employee, "name" | "position">;

  const employeeProfile: PublicEmployeeProfile = {
    name: "John Doe",
    position: "Software Engineer",
  };
  console.log("employeeProfile:", employeeProfile);

  //* type NameAndEmail = Pick<Person, "name" | "email">;

  //* type WithoutAge = Omit<Person, "age">;
}

{
  //* Utils Omit
  interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }

  // Create a new type that excludes the 'password' property
  type SafeUser = Omit<User, "password">;

  // Now SafeUser has only the id, name, and email properties
  const userWithoutPassword: SafeUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
  console.log("userWithoutPassword:", userWithoutPassword);

  // The following line would cause a TypeScript error because 'password' is omitted
  // const invalidUser: SafeUser = { id: 2, name: 'Bob', email: 'bob@example.com', password: 'secret' }; // Error

  // Create a new type that excludes both 'email' and 'password'
  type PublicUserProfile = Omit<User, "email" | "password">;

  // PublicUserProfile will have only the id and name properties
  const publicProfile: PublicUserProfile = {
    id: 1,
    name: "Alice",
  };
  console.log("publicProfile:", publicProfile);

  // This would be an error as email and password are omitted
  // const invalidProfile: PublicUserProfile = { id: 1, name: 'Alice', email: 'alice@example.com' }; // Error
}

{
  //* Generics in Interfaces
  // Define a generic interface
  interface DataHolder<T> {
    value: T; // The value of type T
    description: string; // A description of the value
  }

  // Create instances of DataHolder with different types
  const numberData: DataHolder<number> = {
    value: 42,
    description: "The answer to life, the universe, and everything",
  };

  const stringData: DataHolder<string> = {
    value: "Hello, TypeScript!",
    description: "A greeting message",
  };

  const booleanData: DataHolder<boolean> = {
    value: true,
    description: "A boolean value indicating true",
  };

  // Function to log the data
  function logData<T>(data: DataHolder<T>): void {
    console.log(`${data.description}: ${data.value}`);
  }

  // Using the logData function with different types
  logData(numberData); // Output: The answer to life, the universe, and everything: 42
  logData(stringData); // Output: A greeting message: Hello, TypeScript!
  logData(booleanData); // Output: A boolean value indicating true: true
}

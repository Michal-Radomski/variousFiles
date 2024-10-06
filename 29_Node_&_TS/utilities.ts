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

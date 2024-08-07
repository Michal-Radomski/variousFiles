// Types and Interfaces

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
type Action = typeof store.action;

interface WindowDimensions {
  width: number;
  height: number;
}

interface UserProps {
  name: string;
  age: number;
  email: string;
}

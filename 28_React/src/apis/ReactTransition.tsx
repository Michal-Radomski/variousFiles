import React from "react";

//* Using useTransition
const TaskListApp: React.FC = (): JSX.Element => {
  const [isPending, startTransition] = React.useTransition();
  const [screen, setScreen] = React.useState<"tasks" | "completed">("tasks");

  const selectScreen = (nextScreen: "tasks" | "completed"): void => {
    startTransition((): void => {
      setScreen(nextScreen);
    });
  };

  return (
    <div>
      <h1>My Task List App</h1>
      {isPending && <p>Loading...</p>}
      {screen === "tasks" && (
        <div>
          <p>Task 1: Complete React App</p>
          <p>Task 2: Learn Hooks</p>
        </div>
      )}
      {screen === "completed" && (
        <div>
          <p>Completed Tasks:</p>
          <p>Task 1: Complete React App</p>
        </div>
      )}
      <button onClick={() => selectScreen("tasks")}>View Tasks</button>
      <button onClick={() => selectScreen("completed")}>View Completed</button>
    </div>
  );
};

//* Using startTransition
const TabContainer: React.FC = (): JSX.Element => {
  const [tab, setTab] = React.useState<"home" | "products" | "contact">("home");

  const selectTab = (nextTab: "home" | "products" | "contact"): void => {
    React.startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <React.Fragment>
      <button onClick={() => selectTab("home")}>Home</button>
      <button onClick={() => selectTab("products")}>Products</button>
      <button onClick={() => selectTab("contact")}>Contact</button>

      <hr />
      {tab === "home" && (
        <div>
          <h2>Welcome to Home!</h2>
        </div>
      )}
      {tab === "products" && (
        <div>
          <h2>Our Products</h2>
        </div>
      )}
      {tab === "contact" && (
        <div>
          <h2>Contact Us</h2>
        </div>
      )}
    </React.Fragment>
  );
};

const ReactTransition = (): JSX.Element => {
  return (
    <React.Fragment>
      <TaskListApp />
      <TabContainer />
    </React.Fragment>
  );
};

export default ReactTransition;

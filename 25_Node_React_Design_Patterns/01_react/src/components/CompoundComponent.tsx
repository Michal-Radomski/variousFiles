import React from "react";

// Define the context and its type
interface TabsContextType {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface TabsProps {
  children: React.ReactNode;
}

interface TabListProps {
  children: React.ReactNode;
}

interface TabProps {
  children: React.ReactNode;
  index: number;
}

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

const useTabsContext = (): TabsContextType => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};

const Tabs: React.FC<TabsProps> = ({ children }): JSX.Element => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList: React.FC<TabListProps> = ({ children }): JSX.Element => {
  return <div className="tab-list">{children}</div>;
};

const Tab: React.FC<TabProps> = ({ children, index }): JSX.Element => {
  const { activeIndex, setActiveIndex } = useTabsContext();

  const handleClick = () => {
    setActiveIndex(index);
  };

  return (
    <button className={`tab ${activeIndex === index ? "active" : ""}`} onClick={handleClick}>
      {children}
    </button>
  );
};

const TabPanel: React.FC<TabPanelProps> = ({ children, index }): JSX.Element => {
  const { activeIndex } = useTabsContext();

  return (
    <div className={`tab-panel ${activeIndex === index ? "active" : ""}`}>{activeIndex === index ? children : null}</div>
  );
};

const CompoundComponent: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Tabs>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
          <Tab index={2}>Tab 3</Tab>
        </TabList>
        <TabPanel index={0}>Content 1</TabPanel>
        <TabPanel index={1}>Content 2</TabPanel>
        <TabPanel index={2}>Content 3</TabPanel>
      </Tabs>
    </React.Fragment>
  );
};

export default CompoundComponent;

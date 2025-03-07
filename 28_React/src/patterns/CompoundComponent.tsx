//* A Compound Component is a design pattern where multiple components work together to provide a cohesive functionality.
import React from "react";

// Define the props for MenuItem
interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

// MenuItem component
const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }): JSX.Element => {
  return <li onClick={onClick}>{children}</li>;
};

// Define the props for SubMenu
interface SubMenuProps {
  title: string;
  children: React.ReactNode;
}

// SubMenu component
const SubMenu: React.FC<SubMenuProps> = ({ title, children }): JSX.Element => {
  return (
    <div>
      <h4>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
};

// Menu component
interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>{children}</ul>
    </div>
  );
};

const CompoundComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Menu>
        <MenuItem onClick={() => console.log("Home clicked")}>Home</MenuItem>
        <SubMenu title="Settings">
          <MenuItem onClick={() => console.log("Settings clicked")}>Settings</MenuItem>
          <MenuItem onClick={() => console.log("Advanced clicked")}>Advanced</MenuItem>
        </SubMenu>
      </Menu>
    </React.Fragment>
  );
};

export default CompoundComponent;

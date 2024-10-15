import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

const ParallelRouting = (): JSX.Element => (
  <React.Fragment>
    <Router>
      <div>
        <h1>Parallel Routing</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard />}>
            <Route path="analytics" element={<Analytics />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </div>
    </Router>
  </React.Fragment>
);

const Dashboard = (): JSX.Element => (
  <div>
    <h2>Dashboard</h2>
    <Outlet /> {/* Renders the nested routes here */}
  </div>
);

const Home = (): JSX.Element => <h2>Home Page</h2>;
const Analytics = (): JSX.Element => <h3>Analytics Data</h3>;
const Team = (): JSX.Element => <h3>Team Members</h3>;

export default ParallelRouting;

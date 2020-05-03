import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Profile from "./Profile";
import JobList from "./JobList";
import Map from "./Map";

// you should probably use routes
const MainPanel = ({ location }) => {
  return (
    <div className="main-panel">
      {location.pathname === "/dashboard/jobs/list" && <JobList />}
      {location.pathname === "/dashboard" && <Dashboard />}
      {location.pathname === "/dashboard/profile" && <Profile />}
      {location.pathname === "/dashboard/jobs/map" && <Map />}
      <Footer />
    </div>
  );
};

export default MainPanel;

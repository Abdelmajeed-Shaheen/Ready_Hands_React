import React from "react";
import DNavbar from "./DNavbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Profile from "./Profile";
import JobList from "./JobList";
import Map from "./Map";

const MainPanel = ({ location }) => {
  return (
    <div className="main-panel">
      <DNavbar />
      {location.pathname === "/dashboard/jobs/list" && <JobList />}
      {location.pathname === "/dashboard" && <Dashboard />}
      {location.pathname === "/dashboard/profile" && <Profile />}
      {location.pathname === "/dashboard/jobs/map" && <Map />}
      <Footer />
    </div>
  );
};

export default MainPanel;

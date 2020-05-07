import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Profile from "./Profile";
import JobList from "./JobList";
import Map from "./Map";

const MainPanel = ({ location, history }) => {
  return (
    <div className="main-panel">
      {location.pathname === "/worker/dashboard/jobs/list" && (
        <JobList history={history} />
      )}
      {location.pathname === "/worker/dashboard" && <Dashboard />}
      {location.pathname === "/worker/dashboard/profile" && <Profile />}
      {location.pathname === "/worker/dashboard/jobs/map" && <Map />}
      <Footer />
    </div>
  );
};

export default MainPanel;

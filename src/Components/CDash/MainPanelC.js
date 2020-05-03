import React from "react";
import DashboardC from "./DashboardC";
import FooterC from "./FooterC";
import ProfileC from "./ProfileC";
import JobListC from "./JobListC";
import Table from "./Table";

const MainPanelC = ({ location }) => {
  return (
    <div className="main-panel">
      {location.pathname === "/client/dashboard/jobs/list" && <JobListC />}
      {location.pathname === "/client/dashboard" && <DashboardC />}
      {location.pathname === "/client/dashboard/profile" && <ProfileC />}
      {location.pathname === "/client/dashboard/table" && <Table />}
      <FooterC />
    </div>
  );
};

export default MainPanelC;

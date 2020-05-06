import React from "react";
import DashboardC from "./DashboardC";
import FooterC from "./FooterC";
import ProfileC from "./ProfileC";
import Table from "./Table";
import CreateJob from "./CreateJob";

const MainPanelC = ({ location, history }) => {
  return (
    <div className="main-panel">
      {location.pathname === "/client/dashboard" && (
        <DashboardC history={history} />
      )}
      {location.pathname === "/client/dashboard/profile" && <ProfileC />}
      {location.pathname === "/client/dashboard/myjobs" && <Table />}
      {location.pathname === "/client/dashboard/create/job" && (
        <CreateJob history={history} />
      )}
      <FooterC />
    </div>
  );
};

export default MainPanelC;

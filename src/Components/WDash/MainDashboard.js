import React from "react";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

const MainDashboard = ({ location }) => {
  return (
    <div className="wrapper">
      <Sidebar location={location} />
      <MainPanel location={location} />
    </div>
  );
};

export default MainDashboard;

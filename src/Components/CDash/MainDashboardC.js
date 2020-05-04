import React from "react";
import SidebarC from "./SidebarC";
import MainPanelC from "./MainPanelC";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const MainDashboardC = ({ location, user }) => {
  if (!user) return <Redirect to="/home" />;
  return (
    <div className="wrapper">
      <SidebarC location={location} />
      <MainPanelC location={location} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(MainDashboardC);

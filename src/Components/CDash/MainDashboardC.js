import React from "react";
import SidebarC from "./SidebarC";
import MainPanelC from "./MainPanelC";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const MainDashboardC = ({ location, user, getClientJobs }) => {
  getClientJobs();
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
const mapDispatchToProps = dispatch => {
  return {
    getClientJobs: () => dispatch(actions.getClientJobs()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainDashboardC);

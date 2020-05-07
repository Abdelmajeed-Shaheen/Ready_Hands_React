import React from "react";
import SidebarC from "./SidebarC";
import MainPanelC from "./MainPanelC";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const MainDashboardC = ({
  history,
  location,
  user,
  getClientJobs,
  getServices,
}) => {
  getClientJobs();
  getServices();
  if (!user) return <Redirect to="/home" />;
  return (
    <div className="wrapper">
      <SidebarC location={location} user={user.user.username} />
      <MainPanelC location={location} history={history} />
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
    getServices: () => dispatch(actions.getServices()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainDashboardC);

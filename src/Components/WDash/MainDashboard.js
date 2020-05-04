import React from "react";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const MainDashboard = ({ location, user, getAllJobs }) => {
  getAllJobs();
  if (!user) return <Redirect to="/home" />;
  return (
    <div className="wrapper">
      <Sidebar location={location} />
      <MainPanel location={location} />
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
    getAllJobs: () => dispatch(actions.getAllJobs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard);

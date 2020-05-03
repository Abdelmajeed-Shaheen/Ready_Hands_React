import React from "react";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// where is the location prop coming from?
const MainDashboard = ({ location, user }) => {
  if (!user) return <Redirect to="/home" />;
  return (
    <div className="wrapper">
      <Sidebar location={location} />
      <MainPanel location={location} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(MainDashboard);

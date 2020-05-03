import React from "react";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";
import { connect } from "react-redux";

const MainDashboard = ({ location, user }) => {
  // if (!user) return <Redirect to="/home" />;
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

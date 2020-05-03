import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Signup&Login/Login";
import HorizontalLinearStepper from "./Components/CreateJob/CreatePost";
import UserForm from "./Components/Signup&Login/Register/UserForm";
import MainDashboard from "./Components/WDash/MainDashboard";
import MainDashboardC from "./Components/CDash/MainDashboardC";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create/job" component={HorizontalLinearStepper} />
        <Route path="/register" component={UserForm} />
        <Route path="/worker/dashboard" component={MainDashboard} />
        <Route path="/client/dashboard" component={MainDashboardC} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

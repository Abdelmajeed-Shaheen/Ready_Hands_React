import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Signup&Login/Login";
import HorizontalLinearStepper from "./Components/CreateJob/CreatePost";
import UserForm from "./Components/Signup&Login/Register/UserForm";
import MainDashboard from "./Components/WDash/MainDashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create/job" component={HorizontalLinearStepper} />
        <Route path="/register" component={UserForm} />
        <Route path="/dashboard" component={MainDashboard} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Signup&Login/Login";
import HorizontalLinearStepper from "./Components/CreateJob/CreatePost";
import Register from "./Components/Signup&Login/Register";
import Dashboard from "./Components/WorkerDashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create/job" component={HorizontalLinearStepper} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard/jobs/list" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

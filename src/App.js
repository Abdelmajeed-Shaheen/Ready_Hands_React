import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Home";
import JobList from "./Components/Worker/JobList";
import Login from "./Components/Signup&Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/jobs" component={JobList} />
        <Route path="/login" component={Login} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

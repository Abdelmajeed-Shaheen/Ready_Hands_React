import React from "react";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home";
import JobList from "./Components/Worker/JobList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobList />
    </div>
  );
}

export default App;

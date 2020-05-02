import React from "react";
import DashCard from "./DashCard";
import DashTable from "./DashTable";
const Dash = () => {
  return (
    <>
      <div className="row">
        <div className="col-3 mx-4">
          <DashCard />
        </div>
        <div className="col-3 mx-4">
          <DashCard />
        </div>
        <div className="col-3 mx-4">
          <DashCard />
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="row">
            <div className="col-6 ">
              <DashTable />
            </div>
            <div className="col-6">
              <DashTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dash;

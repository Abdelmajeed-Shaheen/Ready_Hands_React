import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const Table = ({ jobs }) => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-warning">
                <h4 className="card-title ">MY JOBS</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <th>ID</th>
                      <th>Title</th>
                      <th>Date From</th>
                      <th>Date To</th>
                      <th>Price</th>
                      <th>Status</th>
                    </thead>
                    <tbody>
                      {jobs.map((job, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{job.title}</td>
                          <td>{moment(job.date_from).format("lll")}</td>
                          <td>{moment(job.date_to).format("lll")}</td>
                          <td>{job.price} JOD</td>
                          {job.status === "P" && (
                            <td style={{ color: "orange", fontWeight: "bold" }}>
                              PENDING
                            </td>
                          )}
                          {job.status === "S" && (
                            <td style={{ color: "green", fontWeight: "bold" }}>
                              SELECTED
                            </td>
                          )}
                          {job.status === "FI" && (
                            <td style={{ color: "red", fontWeight: "bold" }}>
                              FINISHED
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    jobs: state.jobsState.clientjobs,
  };
};

export default connect(mapStateToProps)(Table);

import React from "react";
import { connect } from "react-redux";

const Dashboard = ({ appliedjobs }) => {
  let totalincome = 0.0;
  const totaljobs = appliedjobs.length;
  const acceptedjobs = appliedjobs.filter((job) => job.acccepted === true);
  const pendingjobs = appliedjobs.filter((job) => job.acccepted === false);
  acceptedjobs.map(
    (job) => (totalincome = totalincome + parseFloat(job.job.price))
  );
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div
                  className="card-icon"
                  style={{ backgroundColor: "#00838f" }}
                >
                  <i className="material-icons">work_outline</i>
                </div>
                <p className="card-category">Applied Jobs</p>
                <h3 className="card-title">{totaljobs}</h3>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-icon">
                <div
                  className="card-icon"
                  style={{ backgroundColor: "#00acc1" }}
                >
                  <i className="material-icons">account_balance_wallet</i>
                </div>
                <p className="card-category">Revenue</p>
                <h3 className="card-title">{totalincome}JOD</h3>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-icon">
                <div
                  className="card-icon"
                  style={{ backgroundColor: "#26c6da " }}
                >
                  <i className="material-icons">hourglass_empty</i>
                </div>
                <p className="card-category">Pending Jobs</p>
                <h3 className="card-title">
                  {pendingjobs.length}/{totaljobs}
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-icon">
                <div
                  className="card-icon"
                  style={{ backgroundColor: "#80deea " }}
                >
                  <i className="material-icons">check</i>
                </div>
                <p className="card-category">Acepted Jobs</p>
                <h3 className="card-title">
                  {acceptedjobs.length}/{totaljobs}
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div
                className="card-header "
                style={{ backgroundColor: "#669999" }}
              >
                <h4 className="card-title" style={{ color: "white" }}>
                  Pending Jobs
                </h4>
              </div>
              <div
                className="card-body table-responsive"
                style={{ overflowY: "auto", height: "400px" }}
              >
                <table className="table table-hover">
                  <thead className="text-warning">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>Service</th>
                  </thead>
                  <tbody>
                    {pendingjobs.map((job, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{job.job.title}</td>
                        <td>{job.job.date_from.substring(0, 10)}</td>
                        <td>{job.job.service.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#669999" }}
              >
                <h4 className="card-title" style={{ color: "white" }}>
                  Accepted Jobs
                </h4>
              </div>
              <div
                className="card-body table-responsive"
                style={{ overflowY: "auto", height: "400px" }}
              >
                <table className="table table-hover">
                  <thead className="text-warning">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>Payment</th>
                  </thead>
                  <tbody>
                    {acceptedjobs.map((job, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{job.job.title}</td>
                        <td>{job.job.date_from.substring(0, 10)}</td>
                        <td>{job.job.price} JOD</td>
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
  );
};
const mapStateToProps = (state) => {
  return {
    appliedjobs: state.jobsState.appliedjobs,
  };
};

export default connect(mapStateToProps)(Dashboard);

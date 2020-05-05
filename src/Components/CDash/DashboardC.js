import React from "react";
import { connect } from "react-redux";

const DashboardC = ({ jobs }) => {
  const totaljobs = jobs.length;
  const pendingjobs = jobs.filter(job => job.status === "P");
  const selectedjobs = jobs.filter(job => job.status === "S");
  const finishedjobs = jobs.filter(job => job.status === "F");
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">work_outline</i>
                </div>
                <p className="card-category">Number Of Jobs</p>
                <h3 className="card-title">{totaljobs}</h3>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-success card-header-icon">
                <div className="card-icon">
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
              <div className="card-header card-header-info card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">check</i>
                </div>
                <p className="card-category">Selected Jobs</p>
                <h3 className="card-title">
                  {selectedjobs.length}/{totaljobs}
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">assignment_turned_in</i>
                </div>
                <p className="card-category">Finished Jobs</p>
                <h3 className="card-title">
                  {finishedjobs.length}/{totaljobs}
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
              <div className="card-header card-header-warning">
                <h4 className="card-title">Pending Jobs</h4>
              </div>
              <div className="card-body table-responsive">
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
                        <td>{job.title}</td>
                        <td>{job.date_from.substring(0, 10)}</td>
                        <td>{job.service.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header card-header-warning">
                <h4 className="card-title">Selected Jobs</h4>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-hover">
                  <thead className="text-warning">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>Service</th>
                  </thead>
                  <tbody>
                    {selectedjobs.map((job, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{job.title}</td>
                        <td>{job.date_from.substring(0, 10)}</td>
                        <td>{job.service.title}</td>
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
const mapStateToProps = state => {
  return {
    jobs: state.jobsState.clientjobs,
  };
};

export default connect(mapStateToProps)(DashboardC);

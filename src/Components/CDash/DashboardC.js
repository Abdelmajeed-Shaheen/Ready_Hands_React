import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

class DashboardC extends Component {
  state = {
    jobapplicants: null,
  };
  componentDidUpdate(prevprops) {
    if (prevprops.jobapplicants !== this.props.jobapplicants) {
      this.setState({ jobapplicants: this.props.jobapplicants });
    }
  }
  render() {
    const { jobs, history, acceptApplicant } = this.props;
    const totaljobs = jobs.length;
    const pendingjobs = jobs.filter(job => job.status === "P");
    const selectedjobs = jobs.filter(job => job.status === "S");
    const finishedjobs = jobs.filter(job => job.status === "FI");
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#dce775" }}
                  >
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
                <div
                  className="card-body table-responsive"
                  style={{ overflowY: "auto", height: "500px" }}
                >
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <th>ID</th>
                      <th>Title</th>
                      <th>Start Date</th>
                      <th></th>
                    </thead>
                    <tbody>
                      {pendingjobs.map((job, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{job.title}</td>
                          <td>{job.date_from.substring(0, 10)}</td>
                          <td>
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() =>
                                this.props.getJobApplicants(job.id)
                              }
                            >
                              View Applicants
                            </button>
                          </td>
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
                  <h4 className="card-title">Job Applicants</h4>
                </div>
                <div
                  className="card-body table-responsive"
                  style={{ overflowY: "auto", height: "500px" }}
                >
                  {!this.state.jobapplicants ? (
                    <div class="alert alert-warning" role="alert">
                      Please Select A Job
                    </div>
                  ) : this.state.jobapplicants.length === 0 ? (
                    <div class="alert alert-warning" role="alert">
                      This job has No APPLICANTS
                    </div>
                  ) : (
                    <table className="table table-hover">
                      <thead className="text-warning">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th></th>
                      </thead>
                      <tbody>
                        {this.state.jobapplicants.map((job, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{job.worker.user.username}</td>
                            <td>
                              <Box
                                component="fieldset"
                                borderColor="transparent"
                              >
                                <Rating
                                  name="read-only"
                                  value={parseInt(job.worker.rating)}
                                  readOnly
                                />
                              </Box>
                            </td>
                            <td>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => acceptApplicant(job.id, history)}
                              >
                                Accept
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    jobs: state.jobsState.clientjobs,
    jobapplicants: state.jobsState.jobapplicants,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getJobApplicants: job_id => dispatch(actions.getJobApplicants(job_id)),
    acceptApplicant: (applicant_id, history) =>
      dispatch(actions.acceptApplicant(applicant_id, history)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardC);

import React from "react";
import JobCard from "./JobCard";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const JobList = ({ jobs, history }) => {
  const jobslist = jobs.map(job => <JobCard job={job} history={history} />);
  return (
    <div className="container py-5">
      <Grid container spacing={4}>
        {jobslist}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobs: state.jobsState.jobs,
  };
};

export default connect(mapStateToProps)(JobList);

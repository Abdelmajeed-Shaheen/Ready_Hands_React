import React from "react";
import { connect } from "react-redux";
import JobCardC from "./JobCardC";
import { Grid } from "@material-ui/core";
const JobListC = ({ jobs }) => {
  const jobslist = jobs.map(job => <JobCardC job={job} />);
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
    jobs: state.jobsState.clientjobs,
  };
};

export default connect(mapStateToProps)(JobListC);

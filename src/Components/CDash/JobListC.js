import React from "react";
import JobCardC from "./JobCardC";
import { Grid } from "@material-ui/core";
const JobListC = () => {
  return (
    <div className="container py-5">
      <Grid container spacing={4}>
        <JobCardC />
        <JobCardC />
        <JobCardC />
      </Grid>
    </div>
  );
};
export default JobListC;

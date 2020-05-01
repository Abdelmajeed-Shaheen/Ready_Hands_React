import React from "react";
import JobCard from "./JobCard";
import { Grid } from "@material-ui/core";
const JobList = () => {
  return (
    <div className="container mt-3">
      <Grid container spacing={4}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
    </div>
  );
};
export default JobList;

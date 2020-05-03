import React from "react";
import JobCard from "./JobCard";
import { Grid } from "@material-ui/core";
const JobList = () => {
  return (
    <div className="container py-5">
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

import {
  GET_JOBS,
  GET_CLIENT_JOBS,
  GET_WORKER_APPLIED_JOBS,
  GET_SERVICES,
  GET_CLIENT_JOBS_APPLICANTS,
  NAVIGATE_TO_MAP,
} from "./actionTypes";
import { instance } from "./instance";

export const getAllJobs = () => {
  return async dispatch => {
    try {
      const res = await instance.get("jobs/");
      dispatch({
        type: GET_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getClientJobs = () => {
  return async dispatch => {
    try {
      const res = await instance.get("client/jobs/");
      dispatch({
        type: GET_CLIENT_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getWorkerAppliedJobs = () => {
  return async dispatch => {
    try {
      const res = await instance.get("worker/applied/jobs/");
      dispatch({
        type: GET_WORKER_APPLIED_JOBS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const applyToJob = job_id => {
  return async dispatch => {
    try {
      await instance.post(`jobs/${job_id}/apply/`);
      dispatch(getAllJobs());
      dispatch(getWorkerAppliedJobs());
    } catch (err) {
      console.log(err);
    }
  };
};

export const getServices = () => {
  return async dispatch => {
    try {
      const res = await instance.get("services/");
      dispatch({
        type: GET_SERVICES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createJob = (job, history) => {
  return async dispatch => {
    try {
      await instance.post(`jobs/create/`, job);
      dispatch(getClientJobs());
      history.replace("/client/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
};

export const getJobApplicants = job_id => {
  return async dispatch => {
    try {
      const res = await instance.get(`jobs/${job_id}/applicants/`);
      dispatch({
        type: GET_CLIENT_JOBS_APPLICANTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const acceptApplicant = (applicant_id, history) => {
  return async dispatch => {
    try {
      await instance.post(`applicant/${applicant_id}/accept/`);
      dispatch(getClientJobs());
      history.replace("/client/dashboard/myjobs");
    } catch (err) {
      console.log(err);
    }
  };
};

export const navigateToMAp = (job, history) => {
  return dispatch => {
    dispatch({
      type: NAVIGATE_TO_MAP,
      payload: job,
    });
    if (history) history.replace("/worker/dashboard/jobs/map");
  };
};

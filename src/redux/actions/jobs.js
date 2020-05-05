import {
  GET_JOBS,
  GET_CLIENT_JOBS,
  GET_WORKER_APPLIED_JOBS,
  JOB_APPLY,
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
      await instance.post(`worker/job/${job_id}/apply/`);
      dispatch(getAllJobs());
      dispatch(getWorkerAppliedJobs());
    } catch (err) {
      console.log(err);
    }
  };
};

import { GET_JOBS } from "./actionTypes";
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

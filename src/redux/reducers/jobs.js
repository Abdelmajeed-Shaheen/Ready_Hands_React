import {
  GET_JOBS,
  GET_CLIENT_JOBS,
  GET_WORKER_APPLIED_JOBS,
  GET_SERVICES,
  GET_CLIENT_JOBS_APPLICANTS,
  NAVIGATE_TO_MAP,
} from "../actions/actionTypes";

const initialState = {
  jobs: [],
  clientjobs: [],
  appliedjobs: [],
  services: [],
  jobapplicants: [],
  mappinjob: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOBS:
      const jobs = payload.filter(job => job.status === "P");
      return {
        ...state,
        jobs: jobs,
      };
    case GET_CLIENT_JOBS:
      const clientjobs = payload;
      return {
        ...state,
        clientjobs: clientjobs,
      };
    case GET_WORKER_APPLIED_JOBS:
      const appliedjobs = payload;
      return {
        ...state,
        appliedjobs: appliedjobs,
      };
    case GET_SERVICES:
      const services = payload;
      return {
        ...state,
        services: services,
      };
    case GET_CLIENT_JOBS_APPLICANTS:
      const jobapplicants = payload;
      return {
        ...state,
        jobapplicants: jobapplicants,
      };
    case NAVIGATE_TO_MAP:
      return {
        ...state,
        mappinjob: payload,
      };
    default:
      return state;
  }
};

export default reducer;

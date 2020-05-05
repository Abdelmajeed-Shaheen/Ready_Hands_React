import {
  GET_JOBS,
  GET_CLIENT_JOBS,
  GET_WORKER_APPLIED_JOBS,
} from "../actions/actionTypes";

const initialState = {
  jobs: [],
  clientjobs: [],
  appliedjobs: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOBS:
      const jobs = payload;
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
    default:
      return state;
  }
};

export default reducer;

import { GET_JOBS } from "../actions/actionTypes";

const initialState = {
  jobs: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOBS:
      const jobs = payload;
      return {
        ...state,
        jobs: jobs,
      };
    default:
      return state;
  }
};

export default reducer;

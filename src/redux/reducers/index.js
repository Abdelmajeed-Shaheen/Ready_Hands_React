import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import jobsReducer from "./jobs";

export default combineReducers({
  userState: userReducer,
  jobsState: jobsReducer,
  errorsState: errorReducer,
});

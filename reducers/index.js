import { combineReducers } from "redux";

//REDUCERS
import defaultReducer from "./default";

// DON'T DELETE THE DEFAULT REDUCER AS THE ACTION IN IT CALLED AUTOMATICALLY
const rootReducers = combineReducers({
  defaultReducer,
});

export default rootReducers;

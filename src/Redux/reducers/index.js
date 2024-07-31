import counter from "./counterReducer";
import auth from "./authReducer";
import todo from "./todoReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
  todo,
});
export default allReducers;
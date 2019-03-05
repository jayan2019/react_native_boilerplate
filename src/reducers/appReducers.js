import { combineReducers } from "redux";
import auth from "./auth";
import userInterface from "./userInterface";
import navigation from "./navigation";

// combine all reducers
const appReducers = combineReducers({
  auth,
  userInterface,
  navigation
});

export default appReducers;

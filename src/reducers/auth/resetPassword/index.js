import { combineReducers } from "redux";
import metaReducer from "./metaReducer";
import dataReducer from "./dataReducer";

const resetPassword = combineReducers({
  meta: metaReducer,
  data: dataReducer
});

export default resetPassword;

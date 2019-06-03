import { combineReducers } from "redux";
import metaReducer from "./metaReducer";
import dataReducer from "./dataReducer";

const forgetPassword = combineReducers({
  meta: metaReducer,
  data: dataReducer
});

export default forgetPassword;

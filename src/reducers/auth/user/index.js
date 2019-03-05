import { combineReducers } from "redux";
import metaReducer from "./metaReducer";
import dataReducer from "./dataReducer";

const userReducers = combineReducers({
  meta: metaReducer,
  data: dataReducer
});

export default userReducers;

import { combineReducers } from "redux";
import metaReducer from "./metaReducer";
import dataReducer from "./dataReducer";

const accessTokenReducers = combineReducers({
  meta: metaReducer,
  data: dataReducer
});

export default accessTokenReducers;

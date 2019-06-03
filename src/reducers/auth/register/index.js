import { combineReducers } from "redux";
import metaReducer from "./metaReducer";
import dataReducer from "./dataReducer";

const register = combineReducers({
  meta: metaReducer,
  data: dataReducer
});

export default register;

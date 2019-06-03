import appReducers from "./appReducers";
import { RESET_STATE } from "../constants";

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducer;

import initialState from "./initialState";
import {
  GET_AUTH_USER_SUCCESS,
  SET_USER_SKIP_DOWNLOAD,
  ENABLE_DETAIL_ACTIVITY
} from "../../../../constants";

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        enable_detail_activity: true,
        ...action.user
      };
    case SET_USER_SKIP_DOWNLOAD:
      return {
        ...state,
        skip: action.data
      };
    case ENABLE_DETAIL_ACTIVITY:
      return {
        ...state,
        enable_detail_activity: action.data
      };
    default:
      return state;
  }
};

export default dataReducers;

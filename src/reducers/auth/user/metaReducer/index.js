import initialState from "./initialState";
import {
  GET_AUTH_USER,
  GET_AUTH_USER_FAILURE,
  GET_AUTH_USER_SUCCESS
} from "../../../../constants";

const metaReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER:
      return {
        ...state,
        hasErrors: false,
        isLoading: true,
        errors: {
          title: null,
          data: {}
        }
      };
    case GET_AUTH_USER_FAILURE:
      return {
        ...state,
        hasErrors: true,
        isLoading: false,
        isLoaded: true,
        errors: action.errors
      };
    case GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        hasErrors: false,
        isLoading: false,
        isLoaded: true,
        errors: {
          title: null,
          data: {}
        }
      };
    default:
      return state;
  }
};

export default metaReducers;

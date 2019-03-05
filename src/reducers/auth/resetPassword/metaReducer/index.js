import initialState from "./initialState";
import {
  RESET_PASSWORD,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  SET_RESET_PASSWORD_FORM_DATA
} from "../../../../constants";

const metaReducers = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        hasErrors: false,
        isSuccess: false,
        isLoading: true,
        message: null,
        errors: {
          title: null,
          data: {}
        },
        messages: null
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        hasErrors: true,
        isLoading: false,
        isSuccess: false,
        message: null,
        errors: action.errors
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        hasErrors: false,
        isLoading: false,
        isSuccess: true,
        message: action.message,
        errors: {
          title: null,
          data: {}
        }
      };
    case SET_RESET_PASSWORD_FORM_DATA:
      return {
        ...state,
        hasErrors: false,
        isLoading: false,
        isSuccess: false,
        message: null,
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

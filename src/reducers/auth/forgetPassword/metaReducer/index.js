import initialState from "./initialState";
import {
  FORGET_PASSWORD,
  FORGET_PASSWORD_FAILURE,
  FORGET_PASSWORD_SUCCESS,
  SET_FORGET_PASSWORD_FORM_DATA
} from "../../../../constants";

const metaReducers = (state = initialState, action) => {
  switch (action.type) {
    case FORGET_PASSWORD:
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
    case FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        hasErrors: true,
        isLoading: false,
        isSuccess: false,
        message: null,
        errors: action.errors
      };
    case FORGET_PASSWORD_SUCCESS:
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
    case SET_FORGET_PASSWORD_FORM_DATA:
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

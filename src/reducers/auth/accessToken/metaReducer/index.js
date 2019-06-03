import moment from "moment";
import initialState from "./initialState";
import {
  GET_AUTH_TOKEN,
  GET_AUTH_TOKEN_FAILURE,
  GET_AUTH_TOKEN_SUCCESS,
  SET_AUTH_TOKEN_FORM_DATA
} from "../../../../constants";

const metaReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_TOKEN:
      return {
        ...state,
        created: null,
        hasErrors: false,
        isLoading: true,
        errors: {
          title: null,
          data: {}
        }
      };
    case GET_AUTH_TOKEN_FAILURE:
      return {
        ...state,
        hasErrors: true,
        isLoading: false,
        errors: action.errors
      };
    case GET_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        created: moment().format("YYYY-MM-DD HH:mm:ss"),
        hasErrors: false,
        isLoading: false,
        errors: {
          title: null,
          data: {}
        }
      };
    case SET_AUTH_TOKEN_FORM_DATA:
      return {
        ...state,
        hasErrors: false,
        isLoading: false,
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

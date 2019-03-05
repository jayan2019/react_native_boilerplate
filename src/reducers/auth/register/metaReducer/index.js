import initialState from "./initialState";
import {
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SET_REGISTER_FORM_DATA,
  SET_SUBSCRIBED_DATA
} from "../../../../constants";

const metaReducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        hasErrors: false,
        isLoading: true,
        isSuccess: false,
        errors: { title: null, data: {} }
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        hasErrors: true,
        isLoaded: true,
        isLoading: false,
        isSuccess: false,
        isSubscribed: true,
        errors: action.errors
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        hasErrors: false,
        isLoaded: true,
        isLoading: false,
        isSuccess: true,
        isSubscribed: false,
        errors: { title: null, data: {} }
      };
    case SET_REGISTER_FORM_DATA:
      return {
        ...state,
        hasErrors: false,
        isLoading: false,
        errors: { title: null, data: {} }
      };
    case SET_SUBSCRIBED_DATA:
      return { ...state, isSubscribed: action.value };
    default:
      return state;
  }
};

export default metaReducers;

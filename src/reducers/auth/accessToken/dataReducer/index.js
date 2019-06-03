import initialState from "./initialState";

import {
  GET_AUTH_TOKEN_SUCCESS,
  SET_AUTH_TOKEN_FORM_DATA
} from "../../../../constants";

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        ...action.token,
        formData: {
          ...state.formData,
          username: null,
          password: null
        }
      };
    case SET_AUTH_TOKEN_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.formData
        }
      };
    default:
      return state;
  }
};

export default dataReducers;

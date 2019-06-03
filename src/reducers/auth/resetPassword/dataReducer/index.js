import initialState from "./initialState";
import {
  SET_RESET_PASSWORD_FORM_DATA,
  RESET_PASSWORD_SUCCESS
} from "../../../../constants";

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESET_PASSWORD_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.formData
        }
      };
    case RESET_PASSWORD_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default dataReducers;

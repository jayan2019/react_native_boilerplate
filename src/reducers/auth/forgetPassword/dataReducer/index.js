import initialState from "./initialState";
import { SET_FORGET_PASSWORD_FORM_DATA } from "../../../../constants";

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORGET_PASSWORD_FORM_DATA:
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

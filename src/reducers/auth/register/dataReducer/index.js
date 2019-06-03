import initialState from "./initialState";
import {
  SET_REGISTER_FORM_DATA,
  REGISTER_SUCCESS
} from "../../../../constants";

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.formData
        }
      };
    case REGISTER_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default dataReducers;

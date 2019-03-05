import { SET_FORGET_PASSWORD_FORM_DATA } from "../../../constants";

const setAuthTokenFormData = formData => ({
  type: SET_FORGET_PASSWORD_FORM_DATA,
  formData
});

export default setAuthTokenFormData;

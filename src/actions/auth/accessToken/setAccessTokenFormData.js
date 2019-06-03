import { SET_AUTH_TOKEN_FORM_DATA } from "../../../constants";

const setAuthTokenFormData = formData => ({
  type: SET_AUTH_TOKEN_FORM_DATA,
  formData
});

export default setAuthTokenFormData;

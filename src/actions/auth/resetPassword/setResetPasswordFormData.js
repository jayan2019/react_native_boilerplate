import { SET_RESET_PASSWORD_FORM_DATA } from "../../../constants";

const setResetPasswordFormData = formData => ({
  type: SET_RESET_PASSWORD_FORM_DATA,
  formData
});

export default setResetPasswordFormData;
